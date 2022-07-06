let colorPickerTop;
let colorPickerBottom;
let colorPickerRight;
let colorPickerLeft;

let leftColor = (255);
let rightColor = (0);

let bg;


let settings = {
  gradientDirection: ['HORIZONTAL' , 'VERTICAL'],
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  noSmooth();
  

  colorPickerTop = createColorPicker('black');
 
 

  colorPickerBottom = createColorPicker('white');
  

  colorPickerRight = createColorPicker('white');
 

  colorPickerLeft = createColorPicker('black');

br = background(100);
  colorPickerRight.position(width- 90, height/2 );   
  colorPickerLeft.position(60, height/2 );  
  colorPickerTop.position(width/2, 20 );  
  colorPickerBottom.position(width/2, height -50 );  


  gui = new dat.GUI();
  gui.add(settings, 'gradientDirection', ['HORIZONTAL','VERTICAL']);  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 horzPicks();
  vertPicks();
}

function draw() {


  const topColor = color(colorPickerTop.color());
  const bottomColor = color(colorPickerBottom.color());
  const leftColor = color(colorPickerLeft.color());
  const rightColor = color(colorPickerRight.color());


  if(settings.gradientDirection == 'VERTICAL') {
 
 
      for(let y = 0; y < height; y++) {
        const lineColor = lerpColor(topColor, bottomColor, y / height);
        stroke(lineColor);
        line(0, y, width, y);
      } 
    } else
 
    if (settings.gradientDirection == 'HORIZONTAL') {
    
    
    for(let x = 0; x < width; x++) {
      const lineColor = lerpColor(leftColor, rightColor, x / width);
      stroke(lineColor);
      line(x, 0, x, height);
  
    } 
  }
}



function removePickersVert() {
  colorPickerTop.remove();
  colorPickerBottom.remove();
}

function removePickersHorz() {
  colorPickerTop.remove();
  colorPickerBottom.remove();
}

function horzPicks() {
  colorPickerRight.position(width- 90, height/2 );   
  colorPickerLeft.position(60, height/2 );
}

function vertPicks() {
  colorPickerTop.position(width/2, 20 );  
  colorPickerBottom.position(width/2, height -50 ); 
}

function keyPressed() {
  if (key == 'p') {
    saveCanvas('sketch_' + int(random(0, 100)), 'png');
  }
}


