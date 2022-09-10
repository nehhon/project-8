@binding(0) @group(0)  var<uniform> xy : vec4<f32>;
@binding(1) @group(0)  var<uniform> resolution : vec2<f32>;
@binding(2) @group(0)  var<uniform> zoom : f32;
@binding(3) @group(0)  var<uniform> translation : vec2<f32>;

struct VertexOutput {
@builtin(position) pos : vec4<f32>,
@location(0) p : vec2<f32>
}

@vertex
fn vert_main(
@builtin(vertex_index) VertexIndex: u32
) -> VertexOutput {
  var pos = array<vec2<f32>, 6>(
    vec2<f32>(0, 0),
    vec2<f32>(0, 1),
    vec2<f32>(1, 0),
    vec2<f32>(1, 0),
    vec2<f32>(1, 1),
    vec2<f32>(0, 1)
  )[VertexIndex];

  var output:VertexOutput;
  var p=(xy.xy+(xy.zw-xy.xy)*pos);
  output.pos = vec4<f32>(2*(p+translation)/resolution, .97, 1);
  output.pos.x-=1.0;output.pos.y=1.0-output.pos.y;
  output.pos.x*=zoom;output.pos.y*=zoom;
  output.p=p;
  return output;
}

@fragment
fn frag_main(
@location(0) p : vec2<f32>
) -> @location(0) vec4<f32> {
return vec4(0.8,0.8,0.8,.5);
}