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
    rec:u32,
    selectionX:u32,
    selectionY:u32,
    selectionW:u32,
    selectionH:u32
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
    mx:f32,
    my:f32
  }

  fn txta (index:u32) -> vec4<f32> {
    return vec4<f32>(
    f32(index&0xff),
    f32((index>>8)&0xff),
    f32((index>>16)&0xff),
    f32((index>>24)&0xff),
    )/255.0;
  }

  @binding(0) @group(0)  var<storage, read> text1d : array<u32>;
  @binding(1) @group(0)  var<uniform> resolution : vec2<f32>;
  @binding(2) @group(0)  var<storage, read> unitArr : array<unit>;
  @binding(3) @group(0)  var<storage, read> imgData : array<iData>;
  @binding(4) @group(0)  var<uniform> translation : vec2<f32>;
  @binding(5) @group(0)  var<uniform> now : u32;
  @binding(6) @group(0)  var<storage, read> delay : array<f32>;
  @binding(7) @group(0)  var<uniform> zoom : f32;
  @binding(8) @group(0)  var<storage, read> kingdoms : array<kingdom>;
  @binding(9) @group(0)  var<storage, read> info : array<nfo>;
  @binding(10) @group(0) var<uniform> mwidth : u32;
  @binding(11) @group(0) var<uniform> hideTrees : u32;
  @binding(12) @group(0) var<uniform> ambient : vec4<f32>;
  @binding(13) @group(0) var<uniform> uizoom : f32;

  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) textCoord : vec2<f32>,
    @location(1) @interpolate(flat) width : u32,
    @location(2) @interpolate(flat) imgid : u32,
    @location(3) @interpolate(flat) recolor : vec4<f32>,
    @location(4) @interpolate(flat) kcolor : vec4<f32>
  }

  @vertex
fn vert_main(
  @builtin(vertex_index) VertexIndex: u32,
  @builtin(instance_index) InstanceIndex: u32
) -> VertexOutput {
  var u=unitArr[InstanceIndex];
  var z=u.z;
  var fixed=z==-55.0;
  if(fixed){z=1;}

  if(z<0) {var output:VertexOutput;return output;}


  var imgID=u.imgID&0xffff;
  var img=imgData[imgID];


  var dir=((u.imgID>>16)&0xffff)*img.w*img.h*img.frames;
  var timediff=0u;
  if(u.date<0xffffffff){timediff=now-u.date;}

  if(img.fps>0){
  var jump:u32;
  if(img.fps<100) {
    jump=(timediff*img.fps/1000)%img.frames;
    }
  else{
    var df=f32(timediff);
    var pos=img.fps;pos-=100;
    var ini=(pos+img.frames);ini-=1;
    var spt=df%delay[ini];
    for(jump=0;jump<img.frames;jump++){
    if(delay[pos+jump]>spt){
    break;
    }}
  }
  dir+=jump*img.w*img.h;
  }

  var t=f32(timediff)*0.001;
  var upos=vec2<f32>(u.x+u.vx*t,u.y+u.vy*t+u.g*.5*t*t);
  if(u.vy!=0){ z+=(u.vy*t)/f32(mwidth*32*3*2); if(z>1){ z=1;} }

  upos-=vec2<f32>(img.mx,img.my);

  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0)
  )[VertexIndex];


  var tsizes=vec2<f32>(f32(img.w),f32(img.h));
  var vpos=tsizes*pos;

  if(fixed){
    vpos.x*=uizoom;
    vpos.y*=uizoom;
  }

  if(u.rotation!=0.0){
    var s = sin(u.rotation);
    var c = cos(u.rotation);
    vpos *= mat2x2<f32>(c, -s, s, c);
  }

  var output:VertexOutput;

  if(!fixed){vpos+=translation;}
  
  output.pos = vec4<f32>(2*(vpos+upos)/resolution, z, 1.0);
  output.pos.x-=1.0;
  output.pos.y=1.0-output.pos.y;

  if(!fixed){
  output.pos.x*=zoom;
  output.pos.y*=zoom;
  }

  output.textCoord = tsizes*pos;
  output.width = u32(tsizes.x);
  output.imgid = img.pos+dir;


  var nfid=u.info&0xffff;
  var k=kingdoms[(u.info>>16)&0xffff];

  if(nfid<0xffff){
    var nf=info[nfid];

    if(nfid==7&&hideTrees==1){var output0:VertexOutput;return output0;}

    if(nf.rec>0){
      output.kcolor=txta(k.color);
    }
  }else if(img.stype==22){ output.kcolor=txta(k.color); }

  if(u.color>0){
  output.recolor = txta(u.color);
    if(u.color==33554431){
        output.pos.x*=0;
        output.pos.y*=0;
     // var output0:VertexOutput;return output0;
    }
  }

  return output;
}

@fragment
fn frag_main(
  @location(0) textCoord : vec2<f32>,
  @location(1) @interpolate(flat) width : u32,
  @location(2) @interpolate(flat) imgid : u32,
  @location(3) @interpolate(flat) recolor : vec4<f32>,
  @location(4) @interpolate(flat) kcolor : vec4<f32>
  ) -> @location(0) vec4<f32> {
  var ucoord=vec2<u32>(u32(textCoord.x),u32(textCoord.y));
  var id=imgid+ucoord.y*width+(ucoord.x%width);
  var ucolor = text1d[id];
  var color = txta(ucolor);

  if(kcolor.a>0&&color.r==color.g&&color.r==color.b){
      color*=kcolor*1.4;
  }
  
  if(recolor.a>0){
    color*=recolor;
  }

  if(color.a<0.004){ discard; }

  return color*ambient;
}