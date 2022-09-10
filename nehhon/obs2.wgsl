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


  @binding(0) @group(0)  var<uniform> resolution : vec2<f32>;
  @binding(1) @group(0)  var<storage, read> unitArr : array<unit>;
  @binding(2) @group(0)  var<uniform> translation : vec2<f32>;
  @binding(3) @group(0)  var<uniform> now : u32;
  @binding(4) @group(0)  var<uniform> zoom : f32;
  @binding(5) @group(0)  var<storage, read> info : array<nfo>;
  @binding(6) @group(0)  var<uniform> mwidth : u32;


  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) textCoord : vec2<f32>,
  }

  @vertex
fn vert_main(
  @builtin(vertex_index) VertexIndex: u32,
  @builtin(instance_index) InstanceIndex: u32
) -> VertexOutput {
  var u=unitArr[InstanceIndex];
  var timediff=now-u.date;
  var t=f32(timediff)*0.001;
  var upos=vec2<f32>(u.x+u.vx*t,u.y+u.vy*t+u.g*.5*t*t);
  var z=u.z;
  if(u.vy!=0){ z+=(u.vy*t)/f32(mwidth*32*3*2); }

  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0)
  )[VertexIndex];


  var output:VertexOutput;

  if((u.info2&0xff)>0){
  var nf=info[u.info&0xffff];
  var xtra=vec2(24.0);
  var sizes=vec2<f32>(f32(nf.width*32),f32(nf.height*32));
  
  upos-=xtra/2;

  sizes+=xtra;

  var vpos=sizes*pos;
 // upos+=2;
 // sizes-=4;

  output.pos = vec4<f32>(2*(vpos+upos+translation)/resolution, z, 1.0);
  output.pos.x-=1.0;
  output.pos.y=1.0-output.pos.y;
  output.pos.x*=zoom;
  output.pos.y*=zoom;
  output.textCoord = pos;
  }else {output.pos.z=-1;}

  return output;
}

@fragment
fn frag_main(
  @location(0) textCoord : vec2<f32>,
) -> @location(0) vec4<f32> {
  var dist=distance(vec2(0.5),textCoord);

  if(dist>.5) {discard;}
  if(dist<.45) {
    return vec4(1,1,1,dist*dist*dist*dist*4);
  }

  return vec4(1,1,1,.25);
}