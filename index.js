

    var style = document.querySelector("link[href='style.css']").sheet.CSSRules;

    let cssAnimation = document.createElement('style');
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
    var humanGameOver = 0;

  function rotateY(){
    rand = numberArray[Math.floor(Math.random() * 8)];


    cssAnimation.type = 'text/css';
    var rules = document.createTextNode('@keyframes rotateY {100% {transform: rotateY(' + rand + 'deg);}}');
                                                                                                    
    cssAnimation.appendChild(rules);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation);
    container.style.animation = `rotateY 1s`;
    
  }
