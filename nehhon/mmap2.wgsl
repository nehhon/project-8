  struct unit {
    x:f32,
    y:f32,
    z:f32,
    vx:f32,
    vy:f32,
    g:f32,
    imgID:u32,
    date:u32,
    rotation:f32,
    color:u32,
    info:u32,
    info2:u32
  }


  struct nfo{
    sight:u32,
    width:u32,
    height:u32,
    rec:u32
  }

  struct kingdom{
    color:u32,
    enemy:u32,
    visible:u32
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
  @binding(1) @group(0)  var<storage, read> unitArr : array<unit>;
  @binding(2) @group(0)  var<storage, read> imgData : array<iData>;
  @binding(3) @group(0)  var<uniform> now : u32;
  @binding(4) @group(0)  var<storage, read> kingdoms : array<kingdom>;
  @binding(5) @group(0)  var<uniform> hideTrees : u32;
  @binding(6) @group(0)  var<storage, read> info : array<nfo>;


  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) @interpolate(flat) color : vec4<f32>
  }

  @vertex
fn vert_main(
  @builtin(vertex_index) VertexIndex: u32,
  @builtin(instance_index) InstanceIndex: u32
) -> VertexOutput {
  var u=unitArr[InstanceIndex];
  var imgID=u.imgID&0xffff;
  var img=imgData[imgID];


  var t=f32(now-u.date)*0.001;
  var upos=vec2<f32>(u.x+u.vx*t,u.y+u.vy*t+u.g*.5*t*t);

  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0)
  )[VertexIndex];




  var output:VertexOutput;
  var typ=(u.info&0xffff);
  if(typ<0xffff&&u.z>=0&&img.stype!=2&&(typ!=7||hideTrees==0)){
    var nf=info[typ];

    var tsizes=vec2<f32>(f32(nf.width*32),f32(nf.height*32));

    if(tsizes.x<64){ tsizes.x=64;}
    if(tsizes.y<64){ tsizes.y=64;}

    var z=.99;
    var k=kingdoms[(u.info>>16)&0xffff];
    var c=k.color;

    if(typ==7){
      z=.98;
      c=0x088408;
    }else if(typ==21){
      c=0x009494;
     // c=0x004691;
    }else if(typ==22){
      c=0x848484;
    }else if(typ==88){
      c=0x949400;
    }else if(typ==231){
      c=0x5273d6;
    }else if(typ==20){
      c=0x085408;
    }




  output.color = vec4<f32>(
    f32(c&0xff),
    f32((c>>8)&0xff),
    f32((c>>16)&0xff),
    255,)/255;
  output.pos = vec4<f32>(2*(tsizes*pos+upos)/f32(width*32), z, 1.0);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;
  }

  return output;
}

@fragment
fn frag_main(
  @location(0) @interpolate(flat) color : vec4<f32>,
  ) -> @location(0) vec4<f32> {
  if(color.a==0){discard;}
  return color;
}