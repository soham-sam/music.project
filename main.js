    song="";
    leftWristX =0;
    leftwristY =0;
    rightWristX=0;
    rightWristY=0;

    function preload()

    {
        song =loadSound("music.mp3");
    }
    function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide()
    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw ()
{
    Image(video,0,0,600,500);
}

function play()
{
   song.play();
   song.setVolume(1);
   song.rate(1);
} 

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPoses (results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        leftWristX =results [0].pose.leftWrist.x;
        leftWristy =results [0].pose.leftWrist.y;

        console.log("leftwristX="+leftWristX+"leftwristY="+leftWristY)
        rightWristX =results[0].pose.rightWrist.x
        rightWristY =results[0].pose.rightWrist.y
        console.log("rightwristX="+rightWristX+"rightwristY="+rightWristY)

    }
}