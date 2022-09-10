@binding(0) @group(0)  var txt : texture_2d<f32>;
@binding(1) @group(0)  var s : sampler;
@binding(2) @group(0)  var s0 : sampler;
@binding(3) @group(0)  var<uniform> zoom : f32;



struct VertexOutput {
@builtin(position) pos : vec4<f32>,
@location(0) c : vec2<f32>,
@location(1) @interpolate(flat) dims : vec2<f32>
}


@vertex
fn vert_main(
@builtin(vertex_index) VertexIndex: u32
) -> VertexOutput {
 
  var pos = array<vec2<f32>, 6>(
    vec2<f32>(-1,-1),
    vec2<f32>(-1, 1),
    vec2<f32>( 1,-1),
    vec2<f32>( 1,-1),
    vec2<f32>( 1, 1),
    vec2<f32>(-1, 1)
  )[VertexIndex];

  var dims=vec2<f32>(textureDimensions(txt));

  var output:VertexOutput;
  output.pos = vec4<f32>(pos, 1, 1);
  output.c = (pos+vec2(1))/2;
  output.dims = dims;

  return output;
}

@fragment
fn frag_main(
@location(0) c : vec2<f32>,
@location(1) @interpolate(flat) dims : vec2<f32>
) -> @location(0) vec4<f32> {
var coords=vec2(c.x,(1-c.y));


if(zoom>=1){

if(1==0){
var c=vec2(i32(coords.x+.5),i32(coords.y+.5));
var color=textureLoad(txt,c,0);
var coloravg=vec4(0.0);
  var square = array<vec2<i32>, 8>(
  vec2<i32>(0,1),
  vec2<i32>(1,1),
  vec2<i32>(1,0),
  vec2<i32>(1,-1),
  vec2<i32>(0,-1),
  vec2<i32>(-1,-1),
  vec2<i32>(-1,0),
  vec2<i32>(-1,1)
  );

for(var i=0;i<8;i++){
var p=textureLoad(txt,c+square[i],0);
coloravg+=p;
}
coloravg/=8;

var zf=zoom;
return (color*.5+coloravg*.5);
}


return textureSample(txt,s0,coords);
}


return textureSample(txt,s,coords);
}