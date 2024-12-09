#version 300 es
precision highp float;
in vec3 a_position;
in vec4 a_texCoord;
in vec4 a_physic;
in vec4 a_margins;
in uint a_step;

uniform float zoom;
uniform mediump int miniMap;
uniform float now;
uniform mediump int hideTrees;
uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform sampler2D delay;
uniform sampler2D colorArray;
uniform float mapSize;
uniform float TSIZE;


uniform float zMax;
out highp vec2 vTextureCoord;
out vec4 v_kcolor;
out float oy;
out float WIDTH;

out vec2 oriXY;


flat out int rColor;

vec4 superArray(in highp int position) {
     return vec4(0.0);
}

void main() {
float t;

highp vec2 txtcord;
txtcord.y=floor(a_texCoord.x);
txtcord.x=floor((a_texCoord.x-txtcord.y)*TSIZE);
//txtcord.y/=TSIZE;

float zcol=a_texCoord.z;

vec2 sizes = vec2(a_margins[0],a_margins[1]);
if(miniMap==1){
    if(128.0*sizes.x/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.x = 32.0*mapSize/128.0;
    if(128.0*sizes.y/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.y = 32.0*mapSize/128.0;
} 
int pack=int(floor(a_texCoord[3]));

int frames=(pack>>16)&0xffff;
float fps=float(pack&0xffff);


if(frames>100) {
if(frames<200) rColor=1; else rColor=2;
frames-=100;
}

int jump=0;
if(fps!=0.0&&miniMap==0){
if(a_texCoord.y>=0.0){
t=(now-a_texCoord.y);
if(t<0.0) {t=0.0;}
if(fps<100.0){
jump=int(floor(t * fps*0.001));
}else{


int index=int(floor(fps-100.0));

float spt= mod(t,texelFetch(delay, ivec2(frames-1+index, 0), 0).r);

for(jump=0;jump<frames;jump++)
if(texelFetch(delay, ivec2(jump+index, 0), 0).r>spt){
break;
}




}

jump=(jump%frames);


txtcord.x+=float(jump)*sizes.x*sizes.y;
txtcord.y+=floor(txtcord.x/TSIZE);
txtcord.x=mod(txtcord.x,TSIZE);
}



}

vec2 mxy=vec2(0.0);
vec2 posORI;

    if(FUOG&&miniMap==3){
        if(a_margins[3]==0.0){
            sizes=vec2(0.0);
            return;
        }else{
        //mxy=sizes/2.0;
        int sight=int(a_margins[3]);
        sizes=vec2(32*(sight&0xff));
        if(FOG==1) sizes+=vec2(16);
        float mg=float((sight>>8)&0xff);
        float my=floor(mg/10.0);
        posORI=+32.0*vec2(mg-my*10.0,my)+vec2(16)  -(a_position.xy-32.0*floor(a_position.xy/32.0));
        mxy+=posORI;
        mxy+=-sizes;
        sizes=sizes*2.0;
        }
    }


    float scale=1.0;
    if(a_margins.z<-1.0){
    scale=-a_margins.z;
    }



    oy=txtcord.y;

    vec2 tsizes=sizes;
    if(sizes.x<0.0){
        sizes.x*=-1.0;
         tsizes=vec2(64.0)*scale;
    }
    else sizes/=scale;

    WIDTH=tsizes.x;

    if(a_step==1u||a_step==3u){
    mxy.x+=sizes.x;
    txtcord.x+=tsizes.x;
    }

    if(a_step==2u||a_step==3u){
    mxy.y+=sizes.y;
    txtcord.y+=tsizes.y;
    }



	float z=a_position.z;




if(miniMap==3&&sizes==vec2(0.0)){
    mxy=vec2(0.0);
}

	if(z<0.0&&z!=-55.0){
	z*=-1.0;
if(miniMap!=2) mxy*=0.0;
	}






if(a_margins.z>0.0){
    float deg=a_margins.z-10.0;
	float s = sin(deg);
	float c = cos(deg);
	mat2 m = mat2(c, -s, s, c);
	mxy.xy*=m;
}



    t = (now - a_physic.w) * 0.001;
   if(t<0.0) {t=0.0;}
    float physicY=a_physic.y * t + a_physic.z * .5 * t * t;
    vec2 vxy=vec2(a_physic.x * t,physicY);
    mxy+=vxy;

    vec2 res=u_resolution;

if(miniMap==1||miniMap==2){
    z=-1.0;
    res=vec2(mapSize*32.0);
}else{
	z=(1.0 - (physicY+z)/ zMax)*.9;
}


vec2 zm=vec2(zoom, -zoom);
if(a_position.z!=-55.0)
mxy+=u_translation;
else {
z=0.0;
WIDTH*=-1.0;
zm=vec2(1.0,-1.0);
mxy*=GLSCALE;
}


if(hideTrees==1&&(zcol==4.0||zcol==7.0)||miniMap==1&&zcol==15.0||zcol==8.0) return;

   gl_Position = vec4(((a_position.xy+mxy) / res * 2.0 - 1.0)*zm, (z), 1.0);
   vTextureCoord=txtcord;


vec4 outColor=texelFetch(colorArray, ivec2(zcol, 0), 0);


if(FUOG) oriXY=(a_position.xy)+posORI+vxy;

if(a_texCoord.z<16.0) outColor.a+=1.0;


   v_kcolor=outColor;
}