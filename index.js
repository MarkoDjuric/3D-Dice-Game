window.addEventListener('load', function () {
alert('Press button 4x to see who is the winner')
   
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

   console.log(humanScore)

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

    
    function scorerComputer(){  
        if(rotor === 'X'){
            console.log(rotor)
            if( controledNumber === 270){
                 computerScore += 2
            }else if(controledNumber === 360){
                computerScore += 3
            }else if(controledNumber === 450){
                computerScore += 5
            }else if(controledNumber === 540){
                computerScore += 1
            }else if(controledNumber === 630){
                computerScore += 2
            }else if(controledNumber === 720){
                computerScore += 3
            }else if(controledNumber === 810){
                computerScore += 5
            }else if(controledNumber === 900){
                computerScore += 1
            }    
        
        }else if(rotor === 'Z'){
            console.log(rotor)
            if( controledNumber === 270){
                computerScore += 4
            }else if(controledNumber === 360){
                computerScore += 3
            }else if(controledNumber === 450){
                computerScore += 6
            }else if(controledNumber === 540){
                computerScore += 1
            }else if(controledNumber === 630){
                computerScore += 4
               
            }else if(controledNumber === 720){
                computerScore += 3
            }else if(controledNumber === 810){
                computerScore += 6
            }else if(controledNumber === 900){
                computerScore += 1      
            }
        
        }
        console.log(computerScore)
        return computerScore
    
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

    //Reset Game
    resetBtn.addEventListener('click', () => location.reload())

    //Rolling Game
    rollingBtn.addEventListener('click', () => {
       
       if(humanGameOver == 3){
          alert('wait for computer score...')

          setTimeout(function(){  
            computerRoll()
           
                scorerComputer()
 
           
          }, 1000);

          setTimeout(function(){  
            computerRoll()
            scorerComputer()
          }, 2000);
          setTimeout(function(){  
            computerRoll()
            scorerComputer()
          }, 3000);


          setTimeout(function(){  
          
            if (humanScore > computerScore){
                alert('HUMAN WIN !!!')
                location.reload()
            }else if(humanScore == computerScore){
                alert('DRAW !!!')
                location.reload()
            }else{
                alert('COMPUTER WIN !!!')
                location.reload()
            }
  
          }, 5000);

    
        
      }else{
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
 
        setTimeout(function(){  
            scorer()
        }, 1000);
        
        humanGameOver += 1
      }
    
  
  
      
      


   
























/*
        setTimeout(function(){ 
            if(rotor === 'X'){
                if( controledNumber === 270){
                  roof.style.background = 'url(img/dice-2.png)  no-repeat center' 
                  roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-6.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 360){
                    roof.style.background = 'url(img/dice-3.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-5.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 450){
                    roof.style.background = 'url(img/dice-3.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-5.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 540){
                    roof.style.background = 'url(img/dice-1.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-2.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 630){
                    roof.style.background = 'url(img/dice-2.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-1.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 720){
                    roof.style.background = 'url(img/dice-3.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                        face.style.background = 'url(img/dice-2.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 810){
                    roof.style.background = 'url(img/dice-5.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                        face.style.background = 'url(img/dice-3.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 900){
                    roof.style.background = 'url(img/dice-1.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'   
                        face.style.background = 'url(img/dice-2.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover' 
                }    
            
            }else if(rotor === 'Z'){
                if( controledNumber === 270){
                    roof.style.background = 'url(img/dice-4.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-5.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 360){
                    roof.style.background = 'url(img/dice-3.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-6.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 450){
                    roof.style.background = 'url(img/dice-6.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-4.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 540){
                    roof.style.background = 'url(img/dice-1.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-4.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 630){
                    roof.style.background = 'url(img/dice-4.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                    face.style.background = 'url(img/dice-1.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                   
                }else if(controledNumber === 720){
                    roof.style.background = 'url(img/dice-3.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                        face.style.background = 'url(img/dice-6.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 810){
                    roof.style.background = 'url(img/dice-6.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover'
                        face.style.background = 'url(img/dice-3.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'
                }else if(controledNumber === 900){
                    roof.style.background = 'url(img/dice-1.png)  no-repeat center' 
                    roof.style.backgroundSize = 'cover' 
                        face.style.background = 'url(img/dice-5.png)  no-repeat center' 
                    face.style.backgroundSize = 'cover'       
                }
            
            }
             
        }, 600);


*/
             

    });

    

});