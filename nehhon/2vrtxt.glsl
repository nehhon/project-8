#version 300 es
precision highp float;
in vec3 a_position;
uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform mediump int miniMap;
uniform float zoom;
void main() {
float depth;
if(miniMap!=0){
depth=-0.9;
}else{
depth=1.0;
}
gl_Position = vec4(a_position.x, a_position.y, depth, 1.0);
}