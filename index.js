

    var style = document.querySelector("link[href='style.css']").sheet.CSSRules;

    const cssAnimation = document.createElement('style');
    const resetBtn = document.getElementById('reset');
    const rollingBtn = document.getElementById("roll");
    const rotateSides = ['X','Z'];
    const numberArray = [ 270, 360, 450, 540, 630, 720, 810, 900];
    const container = document.querySelector('.container');
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



    function rotatingCube(){
        var n = numberArray[Math.floor(Math.random() * 8)]
    
       controledNumber = n  
      console.log(controledNumber)

        let rotateCube = rotateSides[Math.floor(Math.random() * rotateSides.length)]
        if(rotateCube != rotor) {
            rotor = rotateCube

            container.style.animation = `rotate${rotateCube} 1s`;

            
        }else {

            let indexMinus = rotateSides.indexOf(rotateCube)
       

            if (indexMinus == 1) {

                rotor = rotateSides[indexMinus - 1]
                container.style.animation = `rotate${rotor} 1s`;

            }else {

                rotor = rotateSides[indexMinus + 1]
                container.style.animation = `rotate${rotor} 1s`;

            }
              
        }
        
    

        // Animation 3D Cube
        cssAnimation.type = 'text/css';
        var rules = document.createTextNode('@keyframes rotateX {100% {transform: rotateX(' + n + 'deg);}}' +
                                            
                                            '@keyframes rotateZ {100% { transform: rotateZ(' + n + 'deg);}}');
                                                                                                        
        cssAnimation.appendChild(rules);
        document.getElementsByTagName("head")[0].appendChild(cssAnimation);
    }
    
