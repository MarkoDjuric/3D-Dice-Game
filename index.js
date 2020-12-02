

    var style = document.querySelector("link[href='style.css']").sheet.CSSRules;

    var cssAnimation = document.createElement('style');
    //let rotatingBtn = document.getElementById("rotate")
    //var face = document.getElementById('face')
    //var roof = document.getElementById('roof')
    let resetBtn = document.getElementById('reset');
    let rollingBtn = document.getElementById("roll");
    let rotateSides = ['X','Z'];
    let numberArray = [ 270, 360, 450, 540, 630, 720, 810, 900];
    let container = document.querySelector('.container');
    let rotor = '';
    var rand = 0;
    var controledNumber = 0;
    // tracking score and chanses for rolling
    var humanScore = 0;
    var computerScore = 0;
    var humanGameOver = 0
