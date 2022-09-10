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


  @binding(0) @group(0) var<uniform> resolution : vec2<f32>;
  @binding(1) @group(0) var<storage, read> unitArr : array<unit>;
  @binding(2) @group(0) var<uniform> translation : vec2<f32>;
  @binding(3) @group(0) var<uniform> now : u32;
  @binding(4) @group(0) var<uniform> zoom : f32;
  @binding(5) @group(0) var<storage, read> kingdoms : array<kingdom>;
  @binding(6) @group(0) var<storage, read> info : array<nfo>;


  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) textCoord : vec2<f32>,
    @location(1) @interpolate(flat) sight : f32
  }

  @vertex
fn vert_main(
  @builtin(vertex_index) VertexIndex: u32,
  @builtin(instance_index) InstanceIndex: u32
) -> VertexOutput {
  var u=unitArr[InstanceIndex];
  var nfid=u.info&0xffff;
  var k=kingdoms[(u.info>>16)&0xffff];
  if(u.z<=.25||k.visible==0||nfid==0xffff) {var output:VertexOutput;return output;}


  var nf=info[nfid];


  var t=0.0;
  if(u.date<0xffffffff){t=f32(now-u.date)*0.001;}

  var upos=vec2<f32>(u.x+u.vx*t,u.y+u.vy*t+u.g*.5*t*t);

  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0)
  )[VertexIndex];


  var tsizes=vec2<f32>(f32(nf.sight)*64+64);
  var vpos=tsizes*pos;

  var output:VertexOutput;


  vpos+=translation-tsizes/2+vec2(f32(nf.width/2),f32(nf.height/2))*32+vec2(16);
  

  output.pos = vec4<f32>(2*(vpos+upos)/resolution, 0, 1.0);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;
  output.pos.x*=zoom;output.pos.y*=zoom;
  
  output.textCoord = pos;
  output.sight=tsizes.x;

  return output;
}





@fragment
fn frag_main(
  @location(0) textCoord : vec2<f32>,
  @location(1) @interpolate(flat) sight : f32
  ) -> @location(0) vec4<f32> {

if(distance(textCoord,vec2(0.5))>.5){discard;}

var dist=sight-(2*sight*distance(textCoord,vec2(0.5)));
var deg=96.0;
if(dist<deg&&1==1){
return vec4(0.0,0.0,0.0,dist/deg);
}


return vec4(0.0,0.0,0.0,1.0);
}