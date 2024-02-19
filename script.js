let snakeArray=[{x:8,y:5}]
let foodObect={x:3,y:14}
let lastTime=0;
let Sc=document.querySelector("#score");
let score=0;
let hiscore=0;
let Hsc=document.querySelector("#highScore");
let board=document.querySelector("#board");
let speed=10
let inputD = {x: 0, y: 0}; 

console.log(foodObect)

//function which is running the codes agin and again
function running(ctime){
    window.requestAnimationFrame(running);    
    //decreses the speed if the snake by exiting the function    
    if((ctime-lastTime)/1000<1/speed){
    
        return;

    }
    lastTime=ctime;

    main();
}
//function to check the hiting of the snake
function hit(snake){
    for(i=1;i<snakeArray.length;i++){
        if(snake[i].x==snake[0].x  && snake[i].y==snake[0].y){
            return true;
        }
    }
        if(snake[0].x>17||snake[0].x<1||snake[0].y>17||snake[0].y<1){
            return true;
        }

        return false;
  
}
//The main function opens here 
function main(){
   //exits the game if the snake hits the wall or itself
    if(hit(snakeArray)){
        score=0;
        Sc.innerHTML="score: " +score
        console.log("its and out")

        alert("Game over. press any key to start the key");
        inputD={x:0,y:0};
        snakeArray=[{x:8,y:5}]; 
      
    
    }

    //fi statement to check whether the snake eats the food
    //if eats the score is updated and compares with the highscore the element is added to the snake array and new food location is given
    if(snakeArray[0].x==foodObect.x&&snakeArray[0].y==foodObect.y){
        score=score+100
        if(score>hiscore){
            hiscore=score;
            localStorage.setItem("highscore",JSON.stringify(hiscore));
            Hsc.innerHTML="highScore: "+hiscore;
        }
        Sc.innerHTML="score: "+score;
        snakeArray.unshift({x:snakeArray[0].x +inputD.x,y:snakeArray[0].y+inputD.y});
        let a=2,b=16;
        foodObect={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
        
    }
    //make the snake move after pressing the assigned keys
    for(i=snakeArray.length-2;i>=0;i--){
        snakeArray[i+1]={...snakeArray[i]}
    }
    snakeArray[0].x+=inputD.x
    snakeArray[0].y+=inputD.y

    console.log(snakeArray[0].x+"asdfasdf"+snakeArray[0].y)
    console.log(foodObect)

    //add the snake head , body and food to the board
    board.innerHTML = "";
    snakeArray.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foodObect.y;
    foodElement.style.gridColumnStart = foodObect.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}
//and the main function closes here


window.requestAnimationFrame(running);


    //give the function to the keys in the keyboard
   window.addEventListener('keydown',e=>{
    switch(e.key){
        case "ArrowUp":
        inputD.x=0;
        inputD.y=-1;
        break;
        case "ArrowDown":
        inputD.x=0;
        inputD.y=1;
        break;
        case "ArrowLeft":
        inputD.x=-1;
        inputD.y=0;
        break;
        case "ArrowRight":
        inputD.x=1;
        inputD.y=0;
        break;
default:
break;
    }
   })

   function printHelloWorld() {
    score=score++
}

setInterval(printHelloWorld, 2000);