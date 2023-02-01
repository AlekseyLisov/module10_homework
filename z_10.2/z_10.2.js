const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=> {
    const widthScreen = window.screen.width;
    const heightScreeen = window.screen.height;
    alert("Screen size:" + " " + widthScreen + "px" + " on"  + " " + heightScreeen + "px")
})