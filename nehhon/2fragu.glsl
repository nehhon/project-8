#version 300 es
precision highp float;


uniform vec2 u_translation;
uniform sampler2D fogMap;

uniform sampler2D frmBUFFER;
in vec2 oriXY;

uniform vec2 u_resolution;
uniform sampler2D img_common[8];
uniform vec4 u_ambient;
uniform mediump int miniMap;
uniform float mx;

uniform vec4 u_circle0;
uniform vec4 u_circle1;
uniform float now;

uniform float mapSize;
uniform float zoom;
uniform float miniMapSize;
uniform float TSIZE;
uniform vec2 minimapMargin;

in vec4 v_kcolor;

in highp vec2 vTextureCoord;
in float WIDTH;
in float oy;
flat in int rColor;
out vec4 COLOR;


float fogval(vec2 xy){
    float v=texture(fogMap,xy).r*255.0+texture(fogMap,xy).a*2550.0;
    if(EXPLORED>0&&v==0.0) v=1.0;
    return v;
}

bool v4no(vec4 color,int r){
if(color.r==float(r)/255.0) return false;
return true;
}

vec4 tcmm(vec2 coords1){

int TSIZEI=int(TSIZE);

ivec2 coords=ivec2(int(coords1[0])%TSIZEI,int(coords1[1]));
int Y=coords.y;
coords.y%=TSIZEI;

if(Y<TSIZEI)
return texelFetch(img_common[0], coords,0);
else if(Y<2*TSIZEI)
return texelFetch(img_common[1], coords,0);
else if(Y<3*TSIZEI)
return texelFetch(img_common[2], coords,0);
else if(Y<4*TSIZEI)
return texelFetch(img_common[3], coords,0);
else if(Y<5*TSIZEI)
return texelFetch(img_common[4], coords,0);
else if(Y<6*TSIZEI)
return texelFetch(img_common[5], coords,0);
else if(Y<7*TSIZEI)
return texelFetch(img_common[6], coords,0);
else if(Y<8*TSIZEI)
return texelFetch(img_common[7], coords,0);
}



void main() {

vec4 light = u_ambient;
bool free=false;
float width=WIDTH;
if(width<0.0) width*=-1.0,free=true;

vec2 xy;
if(miniMap==1){
xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom;
xy+=minimapMargin/zoom;
}else{
xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom-u_translation+0.5*(u_resolution-u_resolution/zoom);
//xy.y*=-1.0;
    }

    if(FUOG&&miniMap==3){
    vec2 xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom-u_translation+0.5*(u_resolution-u_resolution/zoom);

    float dist=2.0*distance(xy,oriXY);
    if(dist>width) discard;
    const float tr=64.0;

    if(width-dist<tr)
    COLOR=vec4(width-dist)/tr;
    else
    COLOR=vec4(1.0);
    
    return;
    }



if(FOG>0&&miniMap<2&&zoom>0.0&&!free){
float div= miniMap==0 ? mapSize*32.0 : miniMapSize;
float fog=fogval(xy/div);

float Hfog;
if(FUOG){


if(miniMap==0){
Hfog=texture(frmBUFFER,vec2(gl_FragCoord.x/u_resolution.x,(-u_resolution.y+gl_FragCoord.y)/u_resolution.y)).r;
if(FOG==3) light*=Hfog,1.0;
if(fog>1.0) fog=1.0;
}
}

if(fog==0.0&&(!FUOG||Hfog==0.0)) discard;


float mulp=1.0,mulp2=1.0;
if(miniMap==0){
vec2 dec=xy/32.0, cnt=floor(dec)+.5;
const float sq8[16]=float[](1.0,0.0, 0.0,-1.0, -1.0,0.0, 0.0,1.0, 1.0,1.0,1.0,-1.0, -1.0,-1.0,-1.0,1.0);
for(int i=0;i<8;i++){
vec2 pos=dec+vec2(sq8[i*2],sq8[i*2+1]);
float g=fogval(pos/mapSize);
if(fog>0.0&&g==0.0||fog>1.0&&g==1.0){
    vec2 ori=cnt+vec2(sq8[i*2],sq8[i*2+1])*.5;
    vec2 dif=ori-dec;
    if(sq8[i*2]==0.0)   dif.x=0.0;
    if(sq8[i*2+1]==0.0) dif.y=0.0;
    float dist=sqrt(dot(dif,dif));
    if(dist<1.0){
        if(fog>0.0&&g==0.0) mulp*=dist;
        else mulp2*=dist;
    }
}
}

if(mulp2<1.0) mulp2+=.4;
if(mulp2>1.0) mulp2=1.0;
    }
if(FOG==2){if(fog==1.0&&miniMap==0) mulp2*=.4; mulp*=mulp2;}


if(FUOG&&miniMap==0){
if(Hfog>0.0) mulp=max(Hfog,mulp);
if(Hfog>0.0&&fog==0.0) mulp=Hfog;
}


light.rgb*=mulp;

}

//

if(miniMap==0){


float dy=floor(vTextureCoord.y-oy);
highp vec2 txtCoords=vec2(vTextureCoord.x+dy*width,oy);
txtCoords.y+=floor(txtCoords.x/TSIZE);


vec4 color=tcmm(txtCoords);
//if(color==vec4(0.0,0.0,0.0,1.0)) discard;

if(rColor==2) color.a=(color.r+color.g+color.b)/2.5;
if(color.a==0.0) discard;


if(rColor==1&&color.r==color.g&&color.r==color.b) color.rgb*=v_kcolor.rgb*1.4;


if(v_kcolor.a>1.0)
{
color*=v_kcolor-vec4(0.0,0.0,0.0,1.0);
}



COLOR=color*light;


if(!free&&BRMODE>0){
if(u_circle0.z>0.0){
    float ct=(now-u_circle0.w);
    if(ct>u_circle1.w) ct=1.0; else ct/=u_circle1.w;
    if(ct<0.0) ct=0.0;
    vec2 cx=vec2(u_circle0.xy+u_circle1.xy*ct);
    float d=distance(xy,cx),r=u_circle0.z+u_circle1.z*ct,grad=128.0;
    if(d>r){
        vec3 iv=COLOR.rgb;
        float v=0.3*(1.0+cos(d*0.08+now*0.005+.9))+.4;
        vec3 v3=vec3(v,0.0,0.0);
        float r=(d-r)/grad;
        if(r>1.0) r=1.0;
        COLOR.rgb=iv*v3*r+(1.0-r)*COLOR.rgb;
}
}
}

}else if(miniMap<3){
if(floor(v_kcolor.a*255.0-255.0+.5)==126.0) discard;
if(v_kcolor.a>1.0)
COLOR=v_kcolor-vec4(0.0,0.0,0.0,1.0);
else
COLOR=v_kcolor;



COLOR*=light;
}else{

COLOR=vec4(1.0);

}


}