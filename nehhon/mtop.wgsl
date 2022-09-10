  struct terrain {
    img1:u32,
    img2:u32,
    border:u32
  }

  struct iData{
    pos:u32,
    w:u32,
    h:u32,
    fps:u32,
    frames:u32,
    minimap_color:u32,
    stype:u32,
    mx:u32,
    my:u32
  }

  @binding(0) @group(0)  var<storage, read> FogMap : array<u32>;
  @binding(1) @group(0)  var<uniform> mwidth : u32;

  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) textCoord : vec2<f32>,
    @location(1) @interpolate(flat) fog2 : u32
  }

fn gfog(id:u32)->u32{
    var v=FogMap[id/2];
    v=(v>>((id%2)*16))&0xffff;
    return v;
}

  @vertex
fn vert_main(
  @builtin(vertex_index) VertexIndex: u32,
  @builtin(instance_index) InstanceIndex: u32
) -> VertexOutput {
 
  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0, 0),
    vec2<f32>(0, 1),
    vec2<f32>(1, 0),
    vec2<f32>(1, 0),
    vec2<f32>(1, 1),
    vec2<f32>(0, 1)
  )[VertexIndex];

 var vpos=pos*vec2<f32>(f32(mwidth*32));

  var output:VertexOutput;

  output.pos = vec4<f32>(2*pos, .99, 1);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;
  //output.pos.x*=zoom;output.pos.y*=zoom;
  output.textCoord=vpos;
  output.fog2=InstanceIndex;
  return output;
}

@fragment
fn frag_main(
  @location(0) textCoord : vec2<f32>,
  @location(1) @interpolate(flat) fog2 : u32
) -> @location(0) vec4<f32> {
    var c=vec2<u32>(u32(textCoord.x),u32(textCoord.y))/(32);
    var id=(c.x+c.y*mwidth);
    
  if(fog2==1){
   if(gfog(id)==1){
   return vec4(0,0,0,.5);
   }
  }
  
  if(gfog(id)>0){
  discard;
  }

return vec4(0,0,0,1);
}