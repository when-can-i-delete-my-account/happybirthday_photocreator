function preload(){
}

function setup(){;
    canvas = createCanvas(640, 480);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0);
    image
}

function take_snapshot(){
    save("happybirthday.png");
}