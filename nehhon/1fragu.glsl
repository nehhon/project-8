precision highp float;
        uniform float zoom;
        uniform vec2 u_translation;
        uniform float mapSize;
        uniform sampler2D fogMap;
        uniform float TSIZE;

uniform vec2 u_resolution;
uniform sampler2D img_common[8];
uniform vec4 u_ambient;
uniform float miniMapSize;
uniform vec2 minimapMargin;

uniform mediump int miniMap;
varying vec4 v_kcolor;
varying highp vec2 vTextureCoord;
varying float WIDTH;
varying float oy;
varying float rColor;

float fogval(vec2 xy){
    float v=texture2D(fogMap,xy).r*255.0+texture2D(fogMap,xy).a*2550.0;
    if(EXPLORED>0&&v==0.0) v=1.0;
    return v;
}

uniform vec4 u_circle0;
uniform vec4 u_circle1;
uniform float now;


bool v4no(vec4 color,int r){
if(color.r==float(r)/255.0) return false;
return true;
}

vec4 tcmm(vec2 coords){
if(coords.y<1.0)
return texture2D(img_common[0], coords);
else if(coords.y<2.0)
return texture2D(img_common[1], coords);
else if(coords.y<3.0)
return texture2D(img_common[2], coords);
else if(coords.y<4.0)
return texture2D(img_common[3], coords);
else if(coords.y<5.0)
return texture2D(img_common[4], coords);
else if(coords.y<6.0)
return texture2D(img_common[5], coords);
else if(coords.y<7.0)
return texture2D(img_common[6], coords);
else if(coords.y<8.0)
return texture2D(img_common[7], coords);
}


void main() {

    bool free=false;
    float width=WIDTH;
    if(width<0.0) width*=-1.0,free=true;
    vec4 light = u_ambient;

    vec2 xy;
    if(miniMap!=3){

        
        if(miniMap==1){
            xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom;
            xy+=minimapMargin/zoom;
        }else{
        xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom-u_translation+0.5*(u_resolution-u_resolution/zoom);
        //xy.y*=-1.0;
        }

        if(FOG>0&&miniMap<2&&zoom>0.0&&!free){
            float div= miniMap==0 ? mapSize*32.0 : miniMapSize;
            float fog=fogval(xy/div);
            if(fog==0.0) discard;
            
            float mulp=1.0,mulp2=1.0;

            if(miniMap==0){
            vec2 dec=xy/32.0, cnt=floor(dec)+.5;
            float sq8[16];
            sq8[0]=1.0;sq8[1]=0.0;sq8[2]=0.0;sq8[3]=-1.0;sq8[4]=-1.0;sq8[5]=0.0;sq8[6]=0.0;sq8[7]=1.0;sq8[8]=1.0;sq8[9]=1.0;sq8[10]=1.0;sq8[11]=-1.0;sq8[12]=-1.0;sq8[13]=-1.0;
            sq8[14]=-1.0;sq8[15]=1.0;

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
        

          
            if(FOG==2){light.rgb*=mulp2;if(fog==1.0) light.rgb*=.4;}
        }
            light.rgb*=mulp;
            }



        

    }


if(miniMap==0){


    float dy=floor(vTextureCoord.y*TSIZE-oy);
    highp vec2 txtCoords=vec2(vTextureCoord.x+dy*width/TSIZE,oy/TSIZE);
    txtCoords.y+=floor(txtCoords.x)/TSIZE;

    vec4 color=tcmm(txtCoords);
    //if(color==vec4(0.0,0.0,0.0,1.0)) discard;

    if(rColor==2.0) color.a=(color.r+color.g+color.b)/2.5;
    if(color.a==0.0) discard;

if(rColor==1.0 &&color.r==color.g&&color.r==color.b)
color.rgb*=v_kcolor.rgb*1.4;


if(v_kcolor.a>1.0) color*=v_kcolor-vec4(0.0,0.0,0.0,1.0);

if(!free&&BRMODE>0){
if(u_circle0.z>0.0){
    float ct=(now-u_circle0.w);
    if(ct>u_circle1.w) ct=1.0; else ct/=u_circle1.w;
    if(ct<0.0) ct=0.0;
    vec2 cx=vec2(u_circle0.xy+u_circle1.xy*ct);
    float d=distance(xy,cx),r=u_circle0.z+u_circle1.z*ct,grad=128.0;
    if(d>r){
        vec3 iv=light.rgb;
        float v=0.3*(1.0+cos(d*0.08+now*0.005+.9))+.4;
        vec3 v3=vec3(v,0.0,0.0);
        float r=(d-r)/grad;
        if(r>1.0) r=1.0;
        light.rgb=iv*v3*r+(1.0-r)*light.rgb;
    }   
    }
}

//vec4 light=vec4(1.0);

gl_FragColor=color*light;
}else if(miniMap<3){

if(floor(v_kcolor.a*255.0-255.0+.5)==126.0) discard;
if(v_kcolor.a>1.0)
gl_FragColor=v_kcolor-vec4(0.0,0.0,0.0,1.0);
else
gl_FragColor=v_kcolor;


gl_FragColor*=light;
}else{
gl_FragColor=vec4(1.0);
    }

}