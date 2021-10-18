function preload(){
}

function setup(){
    canvas = createCanvas(600, 370);
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 110, 300, 200, 200);
    tint(tint_color)
}

function take_snapshot(){
    save('myPic.png')
}

function filter_tint(){
    tint_color = document.getElementById('bg_col').value;
}