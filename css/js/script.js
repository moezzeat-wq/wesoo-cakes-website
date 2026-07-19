/* ===========================
   WeSoo Cakes Script
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Hero Slider */

    const slides = document.querySelectorAll(".slide");
    let current = 0;

    function showSlide(index){

        slides.forEach(slide=>{
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");

    }

    if(slides.length){

        showSlide(0);

        setInterval(()=>{

            current++;

            if(current>=slides.length){

                current=0;

            }

            showSlide(current);

        },4000);

    }

    /* Header Effect */

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

        }else{

            header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

        }

    });

});
