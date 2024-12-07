

function writeStatment(){
    let str=prompt("please enter string")
    for(let i=1;i<=6;i++){
        document.write(`<h${i}>${str} ${i}</h${i}>`)
        
    }
}




//task2=====================
function getSum(){
    let flag=1;
    let sum=0;

    while (flag !==0 && sum<=100){
        flag=Number(prompt("please enter num if you want stop enter 0 or sumation 100"));
        sum+=flag;
    }
    document.write(`<br> sumtion is ${sum}`)
}
//task3=====================

function getMax(){
    let num1=Number(prompt("please enter num1"));
    let num2=Number(prompt("please enter num2"));
    document.write("<br>");
    document.write(`the great number ${num1>num2?num1:num2}`);
}


//task4==============


function checkRe(){
    let num1=Number(prompt("please enter num1"));
    let num2=Number(prompt("please enter num2"));
    let num3=Number(prompt("please enter num3"));
    
    num1%num2==0 && num1%num3==0? document.write(` num1(${num1}) is divisible by num2(${num2}) and num3(${num3}) `)
    :num1%num3==0?document.write(` num1(${num1}) is divisible by num3(${num3}) `)
    :num1%num2==0? document.write(` num1(${num1}) is divisible by num2(${num2}) `)
    :document.write(` num1(${num1}) is not divisible by num2(${num2}) and num3(${num3})`)
}



//task5==========================


function getDivid5and3(){
    let num1=Number(prompt("please enter num1"));
    let num2=Number(prompt("please enter num2"));
    let con=document.getElementsByClassName("con");
    let sum=0;
    document.write(`number multiple of 3:`);
    for(let i=num1;i<=num2;i++){
        if(i%3==0){
            document.write(` ${i}`);
            sum+=i;
        }
        
    }
        document.write(`<br> number multiple of 5: `);
    for(let i=num1;i<=num2;i++){
        if(i%3==0){
            document.write(` ${i}`);
            sum+=i;
        }
        
    }
    document.write("<br>");
    document.write(`sum is ${sum}`);
}



//task6
function star(){
    let num=Number(prompt("please enter num1"));
    
    for(let i=0;i<num;i++){
        for(let j=0;j<=i;j++){
            document.write("*" )
        }
        document.write("<br>")
    }
}

