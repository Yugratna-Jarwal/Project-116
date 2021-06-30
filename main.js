noseX=0;
noseY=0;
function preload()
{
clown_nose=loadImage('https://i.postimg.cc/XvhJbW79/Moustache.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded()
{
    console.log('model is loaded');
}
function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,80,35);
}
function take_snapshot()
{
    save('image.png');
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x+15);
        console.log("nose y="+results[0].pose.nose.y);
    }
}