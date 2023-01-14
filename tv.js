img="";
stats="";

function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
}

function preload(){
    img=loadImage("tv.avif")
}

function draw(){
    image(img , 0 , 0 , 640 , 420);
    fill("#fc4235");
    text("TV" , 45 , 75);
    noFill();
    stroke("#fc4235");
    rect(30 , 60 , 550 , 350); 
}

objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("stats").innerHTML="Status  : Detecting Objects ";


function modelLoaded(){
    console.log("Model is Loaded");
    stats=true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error ,  results){
    if(error){
        console.log(error);
    }
console.log(results);
}