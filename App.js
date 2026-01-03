let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll("#reset-btn");

let turno=true;//playerx,playero

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turno)
            {
            box.innerText="O";
            turno=false;     
           }else
            {
            box.innerText="x";
            turno=true;
           }
           box.disabled=true;

           checkwinner();
   });
    
});
const checkwinner=() =>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);

    }
};