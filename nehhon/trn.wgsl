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

  @binding(0) @group(0)  var<storage, read> text1d : array<u32>;
  @binding(1) @group(0)  var<uniform> resolution : vec2<f32>;
  @binding(2) @group(0)  var<storage, read> trrArr : array<terrain>;
  @binding(3) @group(0)  var<storage, read> imgData : array<iData>;
  @binding(4) @group(0)  var<uniform> translation : vec2<f32>;
  @binding(5) @group(0)  var<uniform> now : u32;
  @binding(6) @group(0)  var<uniform> mwidth : u32;
  @binding(7) @group(0)  var<uniform> zoom : f32;
  @binding(8) @group(0) var<uniform> ambient : vec4<f32>;


  fn txta (index:u32) -> vec4<f32> {
    return vec4<f32>(
    f32(index&0xff),
    f32((index>>8)&0xff),
    f32((index>>16)&0xff),
    f32((index>>24)&0xff),
    )/255.0;
  }


  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) textCoord : vec2<f32>
  }

  @vertex
fn vert_main(
  @builtin(vertex_index) VertexIndex: u32,
  @builtin(instance_index) InstanceIndex: u32
) -> VertexOutput {
 
  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0)
  )[VertexIndex];


 var vpos=pos*vec2<f32>(f32(mwidth*32));

  var output:VertexOutput;

  output.pos = vec4<f32>(2*(translation+vpos)/resolution, 0, 1);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;
  output.pos.x*=zoom;output.pos.y*=zoom;
  output.textCoord=vpos;
  
  return output;
}

@fragment
fn frag_main(
  @location(0) textCoord : vec2<f32>
) -> @location(0) vec4<f32> {
  var ucoord=vec2<u32>(u32(textCoord.x),u32(textCoord.y));
  var ucoord32=ucoord/32;
  var id=ucoord32.x+ucoord32.y*mwidth;
  var tnfo=trrArr[id];
  var imgid=tnfo.img1;

  var brd=tnfo.border;
  if(brd!=55){
    var pos=brd&0xffff;
    var bid=(brd>>16)&0xffff;
    var border=imgData[bid];
    var bt:u32=32;
    var bcolor=text1d[
    border.pos+
    ((id+ucoord32.x*ucoord32.y+ucoord32.y)*32)%border.w+
    pos*bt*border.w+
    (ucoord.y%bt)*border.w+
    (ucoord.x%bt)];

    var c = txta(bcolor);

    if(c.r==1&&c.g==0&&c.b==1){
    imgid=tnfo.img2;
    }else if(c.a!=0){
    return c*ambient;
    }
  }


  var img=imgData[imgid];
  

  var txtid=img.pos+(ucoord.y%img.h)*img.w+(ucoord.x%img.w);


 if(img.fps>0){
    txtid+=((now*img.fps/1000)%img.frames)*img.w*img.h;
  }




  return txta(text1d[txtid])*ambient;
}