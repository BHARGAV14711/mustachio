NoseX = 0;
NoseY = 0;

function preload(){
mustache = loadImage('https://i.postimg.cc/wTrDzj9d/black-moustaches-vector-illustration-gentleman-260nw-1076855069-removebg-preview.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function take_snapshot(){
    save('MyFilter.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized.')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x-50;
        NoseY = results[0].pose.nose.y-20;
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache , NoseX , NoseY , 100 , 80)
}
