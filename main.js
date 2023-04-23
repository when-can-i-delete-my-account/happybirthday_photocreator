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
    circle(30, 30, 60);
    circle(30, 450, 60);
    circle(610, 30, 60);
    circle(610, 450, 60);
    circle(600, 240, 60);
    circle(40, 240, 60);
    rect(500, 222, 60, 40);
    rect(80, 222, 60, 40);
}

function take_snapshot(){
    save("happybirthday.png");
}