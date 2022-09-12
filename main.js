'use strict';

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ballx = canvas.width/2;
let bally = canvas.height/2-100;
let ball_radius =15;

let g = 9.8;
let v = 0;
let t = 0.3;
let damping = -0.9;

let ballx2 = canvas.width/2+50;
let bally2 = canvas.height/2-100;
let ball_radius2 =15;

let g2 = 9.8;
let v2 = 0;
let t2 = 0.3;
let damping2 = -0.5;

function ball(){
    ctx.beginPath();
    ctx.arc(ballx, bally, ball_radius, 0, Math.PI*2);
    ctx.fillStyle="#00BA76";
    ctx.fill();
    ctx.closePath();
}
function ball2(){
    ctx.beginPath();
    ctx.arc(ballx2, bally2, ball_radius2, 0, Math.PI*2);
    ctx.fillStyle="#00BA76";
    ctx.fill();
    ctx.closePath();
}

function drow(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    v += g * t;
    bally += v * t;
    v2 += g2 * t2;
    bally2 += v2 * t2;

    if(bally > canvas.height - ball_radius){
        bally = canvas.height - ball_radius;
        v *= damping;
    }
    if(bally2 > canvas.height - ball_radius2){
        bally2 = canvas.height - ball_radius2;
        v2 *= damping2;
    }
    ball();
    ball2();
    requestAnimationFrame(drow);
}

drow();