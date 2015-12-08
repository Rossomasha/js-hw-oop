const canvas = document.getElementById("canvas"),
      ctx    = canvas.getContext('2d'),
      cw     = canvas.width,
      ch     = canvas.height,
      offsetW = cw/2+0.5,
      offsetH = ch/2+0.5;

//grid
for (var x = 0.5; x < cw; x += 10) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, ch);
}
for (var y = 0.5; y < ch; y += 10) {
    ctx.moveTo(0, y);
    ctx.lineTo(cw, y);
}
ctx.strokeStyle = "#eee";
ctx.stroke();

//axes
ctx.beginPath();
ctx.moveTo(offsetW, 0);
ctx.lineTo(offsetW, ch);
ctx.moveTo( 0, offsetH);
ctx.lineTo(cw, offsetH);
ctx.strokeStyle = "#555";
ctx.stroke();

export {ctx,cw,ch,offsetW,offsetH};