const clickBtn = document.getElementById("button_click");



clickBtn.addEventListener("click" ,()=>{
    const para = document.createElement("p");

    console.log("fiiii")
    para.style.color = "Red";
    para.id = "Para-1";
    para.style.backgroundColor = "yellow";
    para.innerHTML = "<h4>hello this paragraph is wriiten by react</h4>"
    document.body.appendChild(para)
})