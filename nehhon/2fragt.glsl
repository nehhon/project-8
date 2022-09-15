#version 300 es
precision highp float;

uniform float u_fps;
uniform mediump int miniMap;
uniform sampler2D img_common[7];
uniform vec4 u_ambient;
uniform float TSIZE;

uniform vec4 u_circle0;
uniform vec4 u_circle1;
uniform float now;

uniform vec2 u_translation;

uniform vec2 u_resolution;
uniform vec2 minimapMargin;
uniform sampler2D img_data;
uniform sampler2D fogMap;
uniform sampler2D frmBUFFER;

out vec4 COLOR;
uniform float zoom;
uniform float mx;
uniform float mapSize;

uniform float scale;

float fogval(vec2 xy){
    float v=texture(fogMap,xy).r*255.0+texture(fogMap,xy).a*2550.0;
    if(EXPLORED>0&&v==0.0) v=1.0;
    return v;
}

vec2 oneD2D(highp float xy,float sumx, float sumy, float w){
    float x=mod(xy,TSIZE)+sumx+sumy*w;
    float y=floor(xy/TSIZE)+floor(x/TSIZE);
    return vec2(x, y)/(TSIZE);
}

vec4 tcmm(vec2 coords){
    if(coords.y<1.0)
    return texture(img_common[0], coords);
    else if(coords.y<2.0)
    return texture(img_common[1], coords);
    else if(coords.y<3.0)
    return texture(img_common[2], coords);
    else if(coords.y<4.0)
    return texture(img_common[3], coords);
    else if(coords.y<5.0)
    return texture(img_common[4], coords);
    else if(coords.y<6.0)
    return texture(img_common[5], coords);
    else if(coords.y<7.0)
    return texture(img_common[6], coords);
    }

void main() {
vec4 color;


vec2 xy = vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom;
if(miniMap!=0){
xy+=minimapMargin/zoom;
}else{
xy+=-u_translation+vec2(mx,0.0)/zoom+(u_resolution-u_resolution/zoom)/2.0;
}

if(xy.x<0.0||xy.y<0.0||xy.x>mapSize*32.0||xy.y>mapSize*32.0){
    COLOR=vec4(0.07,0.07,0.07,1.0);
    return;
}

vec4 coords=texture(img_data,(floor(xy/32.0)+vec2(.5))/(mapSize));
highp float tid;

vec4 nrgb=vec4(0.0,0.0,0.0,0.0);

vec2 xym32=mod(floor(xy),32.0);
int wids=int(floor(coords[3]));

float w;
if(coords[2]!=0.0) {
    float w3=float((wids>>16)&0xff)*32.0;
    nrgb=tcmm(oneD2D(coords[2],xym32.x,xym32.y,w3));

}

if(nrgb==vec4(1.0,0.0,1.0,1.0)) {
w=float((wids>>8)&0xff);
tid=coords[1];
}
else{
tid=coords[0];
w=float(wids&0xff);
}

if(nrgb!=vec4(0.0,0.0,0.0,0.0)&&nrgb!=vec4(1.0,0.0,1.0,1.0)){
color=nrgb;
}else{
w*=32.0;
if(w==0.0){
     w=512.0;
     xym32.x+=w*w*u_fps;
}

color=tcmm(oneD2D(tid,scale*xym32.x,scale*xym32.y,w));

}

if(miniMap==0) color*=u_ambient;

if(FOG>0){

float fog=fogval(xy/(32.0*mapSize));
float Hfog;
if(FUOG){


if(miniMap==0){
Hfog=texture(frmBUFFER,vec2(gl_FragCoord.x/u_resolution.x,(-u_resolution.y+gl_FragCoord.y)/u_resolution.y)).r;
if(FOG==3){
    COLOR=vec4(color.rgb*Hfog,1.0);
    
    
    if(BRMODE>0&&u_circle0.z>0.0){
        float ct=(now-u_circle0.w);
        if(ct>u_circle1.w) ct=1.0; else ct/=u_circle1.w;
        if(ct<0.0) ct=0.0;
        {
            vec2 cx=u_circle0.xy+u_circle1.xy;
            float d=distance(xy,cx),r=u_circle0.z+u_circle1.z+32.0,g=32.0,g2=g/2.0;
            if(d<r&&d>r-g) COLOR.rgb+=vec3(0.5*abs(cos(now*0.005)),0,0)*(1.0-abs(d-(r-g2))/(g2));
            }
            vec2 cx=vec2(u_circle0.xy+u_circle1.xy*ct);
            float d=distance(xy,cx),r=u_circle0.z+u_circle1.z*ct,grad=128.0;
            if(d>r){
                vec3 iv=COLOR.rgb;
                float v=0.3*(1.0+cos(d*0.08+now*0.005))+.4;
                vec3 v3=vec3(v,0.0,0.0);
                float r=(d-r)/grad;
                if(r>1.0) r=1.0;
                COLOR.rgb=iv*v3*r+(1.0-r)*COLOR.rgb;
                }
    }



    return;
    }
if(fog>1.0) fog=1.0;
}

}



if(fog==0.0&&(!FUOG||Hfog==0.0)) color.rgb*=0.0;
else {
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

if(FOG==2){if(fog==1.0) mulp2*=.4; mulp*=mulp2;}

if(FUOG){
if(miniMap==0){
if(Hfog>0.0) mulp=max(Hfog,mulp);
if(Hfog>0.0&&fog==0.0) mulp=Hfog;
}
}
color.rgb*=mulp;
}
}




COLOR=color;


    if(BRMODE>0&&u_circle0.z>0.0){
        float ct=(now-u_circle0.w);
        if(ct>u_circle1.w) ct=1.0; else ct/=u_circle1.w;
        if(ct<0.0) ct=0.0;
        {
            vec2 cx=u_circle0.xy+u_circle1.xy;
            float d=distance(xy,cx),r=u_circle0.z+u_circle1.z+32.0,g=32.0,g2=g/2.0;
            if(d<r&&d>r-g) COLOR.rgb+=vec3(0.5*abs(cos(now*0.005)),0,0)*(1.0-abs(d-(r-g2))/(g2));
            }
            vec2 cx=vec2(u_circle0.xy+u_circle1.xy*ct);
            float d=distance(xy,cx),r=u_circle0.z+u_circle1.z*ct,grad=128.0;
            if(d>r){
                vec3 iv=COLOR.rgb;
                float v=0.3*(1.0+cos(d*0.08+now*0.005))+.4;
                vec3 v3=vec3(v,0.0,0.0);
                float r=(d-r)/grad;
                if(r>1.0) r=1.0;
                COLOR.rgb=iv*v3*r+(1.0-r)*COLOR.rgb;
                }
    }


}