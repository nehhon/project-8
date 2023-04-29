  @binding(0) @group(0)  var<uniform> mwidth : u32;
  @binding(1) @group(0)  var<uniform> now : u32;
  @binding(2) @group(0)  var<storage,read> circle : array<brnfo>;

  struct brnfo {
    x:f32,
    y:f32,
    rad:f32,
    t:f32
  }

  struct VertexOutput {
    @builtin(position) pos : vec4<f32>,
    @location(0) textCoord : vec2<f32>
  }

  @vertex
fn vert_main(
  @builtin(vertex_index) VertexIndex: u32
) -> VertexOutput {
 
  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0)
  )[VertexIndex];


 var vpos=pos*vec2<f32>(f32(mwidth))*32;

  var output:VertexOutput;

  output.pos = vec4<f32>(2*(pos), 1, 1);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;

  output.textCoord=vpos;
  
  return output;
}


struct FragOutput {

  @location(0) c: vec4<f32>
}


@fragment
fn frag_main(
  @location(0) pos : vec2<f32>
) -> FragOutput {

var now=f32(now);


var color:FragOutput;
color.c=vec4(1.0);


  if(circle[0].rad>0){


    {
      var cx=vec2(circle[0].x+circle[1].x,circle[0].y+circle[1].y);
      var d=distance(pos,cx);
      var r=circle[0].rad+circle[1].rad+32;
      var g=32.0;
      var g2=g/2;
      if(d<r&&d>r-g) {
        var v=.5*abs(cos(now*0.005))+.5;
        color.c*=vec4(v,0,v,0);


        }

    }






    var ct=now-circle[0].t;
    if(ct>circle[1].t) {ct=1.0;}else{ct/=circle[1].t;}
    if(ct<0.0) {ct=0.0;}

    var cx=vec2(circle[0].x+circle[1].x*ct,circle[0].y+circle[1].y*ct);
    var d=distance(pos,cx);
    var r=circle[0].rad+circle[1].rad*ct;
    var grad=128.0;

    if(d>r){
      var v=0.3*(1.0+cos(d*0.08+now*0.005))+.4;
      color.c*=vec4(v,0,0,0.0);
      return color;
    }

  if(color.c.r>0){ return color;}
    
  }



  discard;
  return color;
}