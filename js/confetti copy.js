"use strict"

//code based off tutorials from matter.js and The Code Train

// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
// var boxA;
var boxes = [];

var ground;

function setup(){
    var myCanvas = createCanvas(600, 500, WEBGL);
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 1;
    // boxA = new Box(200, 100, 50, 50);
    Engine.run(engine);
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(width/2, height, width, 10, options);
    // console.log(boxA);
    // console.log(World)
    World.add(world, ground);
}

function mouseClicked(){
    boxes.push(new Box(mouseX - width/2, mouseY - height/2, 20,20));
    boxes.push(new Box(mouseX - width/2, mouseY - height/2, 20,20));
    boxes.push(new Box(mouseX - width/2, mouseY - height/2, 20,20));
    boxes.push(new Box(mouseX - width/2, mouseY - height/2, 20,20));
    boxes.push(new Box(mouseX - width/2, mouseY - height/2, 20,20));
    boxes.push(new Box(mouseX - width/2, mouseY - height/2, 20,20));
    boxes.push(new Box(mouseX - width/2, mouseY - height/2, 20,20));
}

function draw(){
    background(50);
    for(var i = 0; i < boxes.length; i++){
        boxes[i].show();
        if (boxes[i].isOffScreen()){
            boxes.splice(i,1);
            i--;
        }
    }
    // rotateY(millis() / 1000);
    // box();
    // rect(boxA.position.x, boxA.position.y, 80, 80);
}

