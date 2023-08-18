function preload(){
clown_nose = loadImage("https://i.postimg.cc/gkQ2N23G/red-nose-day-2016-by-jmk-prime-da3yrkm-pre.png");
}

nose_x = 0;
nose_y = 0;
function draw(){
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
circle(nose_x, nose_y, 20);
image(clown_nose, nose_x-15, nose_y-15, 30, 30);
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

PoseNet = ml5.poseNet(video, ModelLoaded);
PoseNet.on("pose", gotPoses);
}

function ModelLoaded(){
    console.log("ModelLoaded");
}

function gotPoses(result) {
if (result.length > 0 ) {
    console.log(result);
    console.log("nose x =" + result[0].pose.nose.x);
    console.log("nose y =" + result[0].pose.nose.y);
    nose_x = result[0].pose.nose.x;
    nose_y = result[0].pose.nose.y;
}
}



function take_snapshot() {
  save("img.png")  
}