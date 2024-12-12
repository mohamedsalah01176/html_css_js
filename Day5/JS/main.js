let con=document.querySelector("#con");

function task1(){
    let objADD = {
        street:"",
        buildingNum:"",
        city:"null",
        date:new Date(),
    }
    for(let i in objADD){
        if(i == "date"){
            break;
        }else{
            let input =prompt(`please enter ${i}`);
            objADD[i]=input;
        }
    }
    function getADD(objADD){
        con.innerHTML=`<span>${objADD.buildingNum} ${objADD.street}, ${objADD.city}</span> city registered in <span> ${objADD.date.toLocaleDateString("en-GB")} </span>`;
    } 

    getADD(objADD);

}

function task2(){
    let obj = {
        name:"",
        age:"",
        gender:"",
    }
    for(let i in obj){
            let input =prompt(`please enter ${i}`);
            obj[i]=input;
    }

    function showVal(obj ,prototype){
        if(prototype === "age"){
            con.innerHTML=`<span>${prototype} </span>is <span> ${obj[prototype]} </span> years old, i wish you good life`;
        }else{
            con.innerHTML=`<span>Hello ${obj.gender === "female"?"MISS":"MS"} <span> ${obj[prototype]} </span> `;
        }
    }

    let prototype =prompt(`please enter prototype to select`);
    showVal(obj,prototype)
}



let win;
function openWin(){
    win=window.open("../../Day1/main.html","_blank","width=300,height=300");
    win.focus();
}
let inter;
function move(){
    if (!win || win.closed) {
        alert(" Please open it first.");
        return;
    }
    win.focus();
    let x=0,y=0,dirY=1,dirX=1;
    inter=setInterval(() => {
        if (y >= 410 || y < 0) {
            // y=0
            dirY *= -1; 
        }
        
        if (x >= 410 || x < 0) {
            // x=0
            dirX *= -1; 
        }
        
        console.log(x,y);
        x+=30*dirX;
        y+=30*dirY;
        win.moveTo(x,y);
    }, 500);
}

function stop(){
    win.focus();
    if (!win || win.closed) {
        alert("Window is not open or has been closed. Please open it first.");
        return;
    }
    clearInterval(inter);
}

let win2;
function openPage(){
    win2=window.open("../../Day1/main.html","_blank","width=300,height=300");
    let inter2=setInterval(()=>{
        win2.scrollBy(0,50);
        let pageHeight = win2.document.documentElement.scrollHeight;
        console.log(win2.scrollY+win2.innerHeight )
        if(win2.scrollY+win2.innerHeight >= pageHeight){
            win2.close();
        }
    },500)
}
