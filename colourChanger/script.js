const btn= document.getElementById("button")
//Function making we are using arrow function
const randomcolor = () =>{
    let val="0123456789ABCDEF"
    let cons="#"
    for(let i=0;i<6;i++){
        cons=cons+val
        //to get a new number every time we are using math.random*16
        //to round the number we are using math.floor because if the output comes in point answer like 10.4 we need to round it up to get a proper index
        [Math.floor(Math.random()*16)]
    }
    return cons;
}
console.log(randomcolor())

function changeRandomColor(){
    document.body.style.backgroundColor=randomcolor()
}
btn.addEventListener("click",changeRandomColor)