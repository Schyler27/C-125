noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600 , 650);
    video.position(100 , 150);

    canvas = createCanvas(550 , 550);
    canvas.position(900 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML = "Width and Height of The Square will be " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX , noseY , difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("noseX = " + noseX + "  noseY = " + noseY);

         leftwristX = results[0].pose.leftWrist.x;
         rightwristX = results[0].pose.rightWrist.x;
         difference = floor(leftwristX - rightwristX);

         console.log("leftwristX = " + leftwristX + "   rightwristX = " + rightwristX + "  difference = " + difference);
    }
}

