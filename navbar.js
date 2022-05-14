const slider = document.querySelector(".slider");
// console.log(slider);
slider.addEventListener("mousewheel", slide);

function slide(e){
    // console.log(e.deltaY);
    // console.log(slider.scrollWidth);
    // scrollWidth, scrollLeft, clientWidth
    console.log(slider.clientWidth);
    if(e.deltaY >= 0)
    {
        slider.scrollLeft = slider.scrollLeft + 500;
        // console.log(slider.scrollLeft);
    }
    else{
        slider.scrollLeft -= 500;
        // console.log(slider.scrollLeft);
    }
}