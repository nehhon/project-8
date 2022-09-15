precision highp float;
attribute vec3 a_position;
attribute vec4 a_texCoord;
attribute vec4 a_physic;
attribute vec4 a_margins;
attribute float a_step;

uniform float zoom;
uniform mediump int miniMap;
uniform float now;
uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform sampler2D u_image1;
uniform sampler2D delay;
uniform sampler2D colorArray;
uniform float mapSize;
uniform mediump int hideTrees;
uniform float TSIZE;

uniform float zMax;
varying highp vec2 vTextureCoord;
varying vec4 v_kcolor;
varying float WIDTH;
varying float rColor;
varying float oy;


float delayr(float pos){
highp vec2 xy = vec2(mod(pos,128.0) ,   floor(pos/128.0) )/128.0;
return (texture2D(delay, xy).r);
}


void main() {
    float t;
    highp float jump=0.0;

    highp vec2 txtcord;
    txtcord.y=floor(a_texCoord.x);
    txtcord.x=a_texCoord.x-txtcord.y;
    txtcord.y/=TSIZE;

    float zcol=a_texCoord.z;
    vec2 sizes = vec2(a_margins[0],a_margins[1]);
    if(miniMap==1){
        if(128.0*sizes.x/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.x = 32.0*mapSize/128.0;
        if(128.0*sizes.y/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.y = 32.0*mapSize/128.0;
    } 

    float pack=floor(a_texCoord[3]);


    float frames=floor((pack)/65536.0);
    float fps=mod(pack,65536.0);

    if(frames>100.0) {
        if(frames<200.0) rColor=1.0; else rColor=2.0;
        frames-=100.0;
    }


if(fps!=0.0&&miniMap==0){
if(a_texCoord.y>=0.0){
t=(now-a_texCoord.y);
if(fps<100.0){
jump=floor(t * fps*0.001);
}else{

    //fps=12.0;
    //jump=floor(t * fps*0.001);



    float index=floor(fps-100.0);

    float spt= mod(t,delayr(frames-1.0+index));
    bool stop=false;
        for(int i=0;i<55;i++){
        if(!stop){
        jump=float(i);
        if(jump<frames)
        if(delayr(jump+index)>spt)
        stop=true;
        }
        }

}

jump=mod(jump,frames);
txtcord.x+=jump*sizes.x*sizes.y/TSIZE;
txtcord.y+=floor(txtcord.x)/TSIZE;
txtcord.x=mod(txtcord.x,1.0);
}
}


    vec2 mxy=vec2(0.0);

    if(miniMap==3){
        if(a_margins[3]==0.0){
            sizes=vec2(0.0);
            return;
        }else{
        mxy=sizes/2.0;
        sizes=vec2(a_margins[3]*32.0);
        mxy+=-sizes;
        sizes=sizes*2.0+1.0;
        }
    }

    float scale=1.0;
    if(a_margins.z<-1.0){
    scale=-a_margins.z;
    }


    oy=txtcord.y*TSIZE;


    vec2 tsizes=sizes;
    if(sizes.x<0.0){
        sizes.x*=-1.0;
        tsizes=vec2(64.0)*scale;
    }else sizes/=scale;
    WIDTH=tsizes.x;

    if(a_step==1.0||a_step==3.0){
    mxy.x+=sizes.x;
    txtcord.x+=tsizes.x/TSIZE;
    }

    if(a_step==2.0||a_step==3.0){
    mxy.y+=sizes.y;
    txtcord.y+=tsizes.y/TSIZE;
    }


    if(miniMap==3&&sizes==vec2(0.0)){
        mxy=vec2(0.0);
    }

	float z=a_position.z;



	if(z<0.0&&z!=-55.0){
	z*=-1.0;
    if(miniMap<2) mxy*=0.0;
	}



if(a_margins.z>0.0){
	float s = sin(a_margins.z-10.0);
	float c = cos(a_margins.z-10.0);
	mat2 m = mat2(c, -s, s, c);
	mxy.xy*=m;
}



    t = (now - a_physic.w) * 0.001;
    mxy.x+=a_physic.x * t;

	float physicY=a_physic.y * t + a_physic.z * .5 * t * t;

    mxy.y+=physicY;

vec2 res=u_resolution;
if(miniMap!=0){
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
zm=vec2(1.0,-1.0);
WIDTH*=-1.0;
mxy*=GLSCALE;
}

    if(hideTrees==1&&(zcol==4.0||zcol==7.0)||miniMap==1&&zcol==15.0) return;

   gl_Position = vec4(((a_position.xy+mxy) / res * 2.0 - 1.0) * zm, (z), 1.0);
   vTextureCoord=txtcord;

vec4 outColor=texture2D(colorArray,vec2(zcol/64.0,0));

if(a_texCoord.z<16.0) outColor.a+=1.0;


   v_kcolor=outColor;
}