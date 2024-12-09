let con=document.querySelector("#con");

function task1(){
    let input=prompt("Please enter words");
    let char=prompt("Please enter one specific character");
    let sensetive=prompt("Please enter case sensetive yes (Y) or no (N) ");
    let count=0;
    let rgx=new RegExp(char, sensetive === "Y"?"g":"gi")
    for(let i=0;i<input.length;i++){
        
        if(input[i].match(rgx)){
            count++;
        }
    }
    con.innerHTML=`the charachter <span>${char}</span>  count is <span>${count}</span> <br>`
}


function task2(){
    let input=prompt("please enter string");
    let sensetive=prompt("Please enter case sensetive yes (Y) or no (N) ");
    input =sensetive == "N"? input.toLowerCase():input
    let check="is <span>palindrome</span>";
    for(let i=0;i<input.length/2;i++){
        if(input[i]!==input[input.length-i-1]){
            check="is  <span> not palindrome</span>"
        }
    }
    con.innerHTML=`the charachter <span>${input}</span> ${check} <br>`;
}


function task3(){
    let input=prompt("please enter string");

    let arr=input.split(" ");
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>max.length){
            max=arr[i];
        }
    }
    con.innerHTML=`the bigest item <span>${max}</span> the length is <span>${max.length}</span> <br>`;
}

function task4(){


    let name;
    let nameRGX=/^[a-zA-Z]+$/;
    do{
        name=prompt("please enter name");
    }while(!nameRGX.test(name));
    
    
    let phone;
    let phoneRGX=/^[0-9]{8}$/;
    do{
        phone=prompt("please enter phone");
    }while(!phoneRGX.test(phone));
    
    
    let mobile;
    let mobileRGX=/^(011|010|012)[0-9]{8}$/;
    do{
        mobile=prompt("please enter mobile");
    }while(!mobileRGX.test(mobile));
    
    
    let email;
    let emailRGX=/^[a-zA-Z0-9]+@{1}[a-z0-9]+.[a-z]+$/;
    do{
        email=prompt("please enter email");
    }while(!emailRGX.test(email));

    let color="red";

    color=prompt("please choose color or by default red").toLocaleLowerCase();
    con.innerHTML=`<div > 
                        <span >userName: </span>
                        <span style="color: ${color};">${name} </span>
                    </div>
                    <div > 
                        <span >phone: </span>
                        <span style="color: ${color};">${phone} </span>
                    </div>
                    <div > 
                        <span >mobile: </span>
                        <span style="color: ${color};">${mobile} </span>
                    </div>
                    <div > 
                        <span >email: </span>
                        <span style="color: ${color};">${email} </span>
                    </div>
                    `
}


function task5(){
    let redius=prompt("enter reduis of cricle");
    let areaC=Math.PI*redius*redius;

    let root=prompt("enter nuber to square root");
    let sqr=Math.sqrt(root).toFixed(2);

    let angleDegree=prompt("please enter your angle");
    angleRedian=angleDegree *(Math.PI /180);
    let cos=Math.cos(angleRedian).toFixed(2);

    con.innerHTML+=`the area os circle of reduis ${redius} is <span>${areaC.toFixed(2)}</span> <br> `;
    con.innerHTML+=`the square root of ${root} is <span>${sqr}</span> <br> `;
    con.innerHTML+=`the cos of ${angleDegree} is <span>${cos}</span> <br> `;

}

function task6(){
    let size= Number(prompt("enter size of array"));
    let input;
    let inputRGX=/[0-9]/;
    let arr=[];

    for(let i=0;i<size;i++){
        input=Number(prompt(`please enter value the size of array =${i}`));
        while(!inputRGX.test(input)){
                input=prompt(`please enter numerical value the size of array =${i}`);
        }
        arr[i]=input;
    }
    arr.sort((a,b)=>a-b);
    con.innerHTML+="ascending sort ";
    for(let i=0;i<arr.length;i++){
        con.innerHTML+=` ${arr[i]} `;
    }
    
    arr.sort((a,b)=>b-a);
    con.innerHTML+="<br>  descending sort ";
    for(let i=0;i<arr.length;i++){
        con.innerHTML+=` ${arr[i]} `;
    }
}