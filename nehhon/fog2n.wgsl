  @binding(0) @group(0)  var<storage, read> FogMap : array<u32>;
  @binding(1) @group(0)  var<uniform> resolution : vec2<f32>;
  @binding(2) @group(0)  var<uniform> translation : vec2<f32>;
  @binding(3) @group(0)  var<uniform> mwidth : u32;
  @binding(4) @group(0)  var<uniform> zoom : f32;

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

  output.pos = vec4<f32>(2*(translation+vpos)/resolution, 0, 1);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;
  output.pos.x*=zoom;output.pos.y*=zoom;
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
    
  var c1=.4;

  var sq8 = array<vec2<i32>, 8>(
  vec2(1,0),
  vec2(1,-1),
  vec2(0,-1),
  vec2(-1,-1),
  vec2(-1,0),
  vec2(-1,1),
  vec2(0,1),
  vec2(1,1)
  );


  var f=gfog(id);

  var p = vec2(f32(c.x*32+16),f32(c.y*32+16));

  if(f==1){
  var m0=1.0;
  var m2=1.0;

    for(var i=0;i<8;i++){
    var v=sq8[i];
    var fv=gfog(u32(i32(id)+v.x+v.y*i32(mwidth)));
    if(fv==0) {
      var pos=p+vec2(f32(v.x),f32(v.y))*16;
      var dif=(textCoord-pos);
      if(v.x==0) {dif.x=0;}
      if(v.y==0) {dif.y=0;}
      var dist=sqrt(dot(dif,dif))/32;
      if(dist<1){
        if(fv==0){m0*=dist;}
        else{m2*=dist;}
      
      }
    }

  }

  return vec4<f32>(0,0,0,m0*(1-m2+c1));
  }else if(f>1){


  var m0=1.0;
  var m2=1.0;

    for(var i=0;i<8;i++){
    var v=sq8[i];
    var fv=gfog(u32(i32(id)+v.x+v.y*i32(mwidth)));
    if(fv<=1) {
      var pos=p+vec2(f32(v.x),f32(v.y))*16;
      var dif=(textCoord-pos);
      if(v.x==0) {dif.x=0;}
      if(v.y==0) {dif.y=0;}
      var dist=sqrt(dot(dif,dif))/32;
      if(dist<1){
        if(fv==0){m0*=dist;}
        else{m2*=dist;}
      
      }
    }

    }


      if(m2<1.0){ m2+=c1;}
      if(m2>1.0){ m2=1;}


  return vec4<f32>(0,0,0,m0*(m2));


  }

return vec4(0.0);
}