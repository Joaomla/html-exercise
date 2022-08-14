const RGBToHSL = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;
    return [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    ];
  };

function changeColor(h, s, l)
{
    h++;
    return [h > 359 ? h - 360 : h, s, l];
}

function changeBGColor(hsl)
{
    var value = document.getElementById("body").style.backgroundColor;
    console.log(value);

    const re = /[0-9]\w+/g;

    var rgb = [];
    do 
    {
        m = re.exec(value);
        if (m) rgb.push(Number(m));
    }
    while( m )

    hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
    hsl = changeColor(hsl[0], hsl[1], hsl[2]);
    document.getElementById("body").style="background-color:hsl(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)";
    console.log(document.getElementById("body").style);
}