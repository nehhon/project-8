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


  @binding(0) @group(0)  var<uniform> width : u32;
  @binding(1) @group(0)  var<storage, read> trrArr : array<terrain>;
  @binding(2) @group(0)  var<storage, read> imgData : array<iData>;
  @binding(3) @group(0)  var<uniform> now : u32;
  @binding(4) @group(0)  var<uniform> zoom : f32;
  @binding(5) @group(0)  var<uniform> translation : vec2<f32>;
  @binding(6) @group(0)  var<uniform> resolution : vec2<f32>;

  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) textCoord : vec2<f32>,
    @location(1) @interpolate(flat) rect : u32,
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

  var output:VertexOutput;
  var z=.98;

  if(InstanceIndex>0){ 
    var rw=f32(width*32);
    var size=resolution/rw;
    var nsize=size/zoom;
    pos*=nsize;
    pos-=translation/rw - (size-nsize)/2;
    z=1;
    output.rect=1;
    }



  output.pos = vec4<f32>(2*pos, z, 1);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;
  output.textCoord=pos*f32(width);
  
  return output;
}

@fragment
fn frag_main(
  @location(0) textCoord : vec2<f32>,
  @location(1) @interpolate(flat) rect : u32
) -> @location(0) vec4<f32> {


  if(rect>0){ 
   // return vec4<f32>(243,205,90,157)/255;
   return vec4(0.8,0.8,0.8,.6);
  }


  var ucoord32=vec2<u32>(u32(textCoord.x),u32(textCoord.y));
  var id=ucoord32.x+ucoord32.y*width;
  var img1=trrArr[id].img1;//imgid+ucoord.y*width+(ucoord.x%width);
  var img=imgData[img1];
  var ucolor:u32 = img.minimap_color;

  var color = vec4<f32>(
    f32(ucolor&0xff),
    f32((ucolor>>8)&0xff),
    f32((ucolor>>16)&0xff),
    255,
    )/255.0;


  if(img.fps>0){
    color*=vec4(1)+(cos((textCoord.y+textCoord.x)/6+f32(now)/130)+1)/20;
  }


  return color;

}