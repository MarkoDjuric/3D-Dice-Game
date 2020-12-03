

    let style = document.querySelector("link[href='style.css']").sheet.CSSRules;

    const cssAnimation = document.createElement('style');
    const resetBtn = document.getElementById('reset');
    const rollingBtn = document.getElementById("roll");
    const rotateSides = ['X','Z'];
    const numberArray = [ 270, 360, 450, 540, 630, 720, 810, 900];
    const container = document.querySelector('.container');
    let rotor = '';
    let rand = 0;
    let controledNumber = 0;
    // tracking score and chanses for rolling
    let humanScore = 0;
    let computerScore = 0;
    let humanGameOver = 0;

//Rotating Cube along the Y axis
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



    function scorer(){  
        if(rotor === 'X'){
            console.log(rotor)
            if( controledNumber === 270){
                 humanScore += 2
            }else if(controledNumber === 360){
                humanScore += 3
            }else if(controledNumber === 450){
                humanScore += 5
            }else if(controledNumber === 540){
                humanScore += 1
            }else if(controledNumber === 630){
                humanScore += 2
            }else if(controledNumber === 720){
                humanScore += 3
            }else if(controledNumber === 810){
                humanScore += 5
            }else if(controledNumber === 900){
                humanScore += 1
            }    
        
        }else if(rotor === 'Z'){
            console.log(rotor)
            if( controledNumber === 270){
                humanScore += 4
            }else if(controledNumber === 360){
                humanScore += 3
            }else if(controledNumber === 450){
                humanScore += 6
            }else if(controledNumber === 540){
                humanScore += 1
            }else if(controledNumber === 630){
                humanScore += 4
               
            }else if(controledNumber === 720){
                humanScore += 3
            }else if(controledNumber === 810){
                humanScore += 6
            }else if(controledNumber === 900){
                humanScore += 1      
            }
        
        }
        console.log(humanScore)
        return humanScore
    
    }

    
    function computerRoll(){
        rotateY()
        setTimeout(function(){  rotatingCube()
        }, 500);
    
        setTimeout(function(){  rotatingCube()
        }, 600);
        setTimeout(function(){  rotatingCube()
        }, 700);
        setTimeout(function(){  rotatingCube()
        }, 800);
        setTimeout(function(){  rotatingCube()
        }, 900);

    }
