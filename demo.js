var robot = require("robotjs")


var id = setInterval(getpositon, 1000);    //setInterval will call getposition after every 1000ms//

function getpositon() {
    var mouse = robot.getMousePos();
    console.log(mouse);

    if (mouse.x == 0 && mouse.y == 0) {                            
        clearInterval(id);
    }                                       // To terminate the process of printing mouse// 
}