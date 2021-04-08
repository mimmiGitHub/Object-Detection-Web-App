img="";
status="";
objects=[];
function preload(){
    img=loadImage('Bedroom.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("bedroom_status").innerHTML="Status: Detecting objects"
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }        
}
function draw(){
    image(img,0,0,640,420);    
    if(status!=""){
        for(i=0;i < objects.lenght;i++){
            document.getElementById("status").innerHTML="Status: Detecting objects"
            fill('red');
            percent=floor(objects[i].confidence * 100)
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            stroke('red');
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}