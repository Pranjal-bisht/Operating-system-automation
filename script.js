var robot = require("robotjs");
var fs= require("fs");
setTimeout(openpaint, 1000);

function openpaint() {
    robot.moveMouseSmooth(70, 846);
    robot.mouseClick();
    robot.typeString("Paint");
    robot.keyTap("enter");
    setTimeout(Writehi, 2000);
}
function Writehi() {
    robot.moveMouseSmooth(400, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(400, 450);
    robot.mouseToggle("up", "left");


    robot.moveMouseSmooth(400, 350);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 350);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(600, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 250);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(800, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 450);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(1510, 8);
    robot.mouseClick();
    robot.moveMouseSmooth(810, 421);
    robot.mouseClick();

    setTimeout(openchrome,2000);
}

function openchrome(){
    robot.moveMouseSmooth(70, 846);
    robot.mouseClick();
    robot.typeString("google chrome");
    robot.keyTap("enter");
    setTimeout(opentabs, 2000);
}


function opentabs(){
    var rdata = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(rdata);

    for(var i=0;i<tabs.length;i++)
    {
        for(var j=0;j<tabs[i].length;j++)
        {
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j<tabs[i].length-1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            }
        }
    }

    setTimeout(opennotepad,2000);
}

function opennotepad(){
    robot.moveMouseSmooth(70, 846);
    robot.mouseClick();
    robot.typeString("Note pad");
    robot.keyTap("enter");
    setTimeout(writenote,2000);
}

function writenote(){
    robot.typeString("System is ready to use");
}