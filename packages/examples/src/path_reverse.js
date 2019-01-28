export default part => {
  let { Point, points, Path, path } = part.shorthand();

  points.B = new Point(10, 30);
  points.BCp2 = new Point(40, 20);
  points.C = new Point(90, 30);
  points.CCp1 = new Point(50, -30);

  paths.example = new Path()
    .move(points.B)
    .curve(points.BCp2, points.CCp1, points.C)
    .attr("data-text", "msg");

  paths.reverse = paths.example.reverse().attr("data-text", "gsm");

  return part;
};