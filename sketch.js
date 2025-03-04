function setup(){
    createCanvas(1000, 1000, WEBGL);
}

function draw(){
    background(255, 182, 193);
    orbitControl();
    elipsoid(30, 40);
    torus();
}

