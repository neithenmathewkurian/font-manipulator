nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function preload(){

}

function setup(){
canvas=createCanvas(300,250);
canvas.position(350,100);
video=createCapture(VIDEO);
video.size(300,300);
posenet=ml5.poseNet(video,modelready);
posenet.on("pose",gotresult)
}

function draw(){
background("brown")
stroke("black");
fill("purple");
textSize(difference);
document.getElementById("length").innerHTML=difference;
text('my name is messi',nosex,nosey);
}

function modelready(){
console.log("modelLoaded")
}
function gotresult(result){
    if(result.length>0){
        console.log(result);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        leftwristx=result[0].pose.leftWrist.x;
        rightwristx=result[0].pose.rightWrist.x;
        difference=floor(leftwristx)-floor(rightwristx);
        
    }

    }

