


let size = 15;
let tox = 20;
let gic = 20;
let board;
let context;
let snakex = 0;
let snakey = 0;
let foodx;
let foody;
let uxutyunX = 0
let uxutyunY = 0
let arr=[]
let sprint;

let point = document.querySelector(".point");
let over = document.querySelector('.over')
let again = document.querySelector('.play-again')
let easy = document.querySelector('.hesht')
let middle = document.querySelector('.normal')
let diff = document.querySelector('.bard')
let mak = document.querySelector('.djvarutyun')
let i = 0;
window.onload = function(){
    board = document.querySelector("canvas"); 
    context = board.getContext("2d");
    document.addEventListener("keydown",change)
    easy.addEventListener('click',function(){
        board.style.display = 'flex'
        mak.style.display = 'none'
        sprint = 130;
        setInterval(update,sprint)
    })
    middle.addEventListener('click',function(){
        board.style.display = 'flex'
        mak.style.display = 'none '
        sprint = 100;
        setInterval(update,sprint)
    })
    diff.addEventListener('click',function(){
        board.style.display = 'flex'
        mak.style.display = 'none '
        sprint = 50;
        setInterval(update,sprint)
    })
    placeFood()
}

let x = false
function update(){
    context.fillStyle = 'black'
    context.fillStyle = 'border-radius(20px)'
    context.fillRect(0,0,board.width,board.height)
    context.fillStyle = 'red'
    context.fillRect(foodx,foody,size,size)
    context.fillStyle = 'green'
    if(snakex == foodx && snakey == foody){
        placeFood()
        arr.push([foodx,foody])
        point.style.display = 'flex'
        i++
        point.innerHTML = i
    }
    for(let i = arr.length -1;i>0;i--){
        arr[i]=arr[i-1]
    }
    if(arr.length){
        arr[0]=[snakex,snakey]
    }
    snakex += uxutyunX*size
    snakey += uxutyunY*size
    let y = true
    if(y){
    context.fillRect(snakex,snakey,size,size)
    }
    for(let i = 0;i<arr.length;i++){
        context.fillStyle='lime'
        context.fillRect(arr[i][0],arr[i][1],size,size)

        if(snakex == arr[i][0] && snakey == arr[i][1]){
           context.clearRect(arr[i][0],arr[i][1],size,size)
            over.style.display = 'flex'
            size = 0 ;
           }
        
    }
   
    if(snakex>board.width-size){
        snakex = 0 
    }
     if(snakey<0){
        snakey = 330
       }
     if(snakey>board.width-size){
           snakey = 0  
       }
       if(snakex<0){
        snakex = 330
    }
}
function placeFood(){
    foodx = Math.floor(Math.random()*tox)*size
    foody = Math.floor(Math.random()*tox)*size
}
function change(e){
if(e.code == 'ArrowUp' && uxutyunY!=1){
       uxutyunX = 0;    
       uxutyunY = -1;
}
if(e.code == 'ArrowLeft' && uxutyunX!=1){
    uxutyunX = -1;    
    uxutyunY = 0;
}
if(e.code == 'ArrowRight' && uxutyunX!=-1){
    uxutyunX = 1;    
    uxutyunY = 0;
}
if(e.code == 'ArrowDown' && uxutyunY!=-1){
    uxutyunX = 0;    
    uxutyunY = 1;
}
}

