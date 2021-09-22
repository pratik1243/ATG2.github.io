
let index = 0;

function next() {
    let section2 = document.getElementById('section2');
    let scrolls = document.querySelector('.scrolls1');
    let scrolls2 = document.querySelector('.scrolls2');
    let scrolls3 = document.querySelector('.scrolls3');
    let section1 = document.getElementById('section1');
    let circle=document.getElementById('circle');
    let ring=document.getElementById('Opaque_Ring');
    let dot2=document.getElementById('dotsst dotsfill2');
    let dot3=document.getElementById('dotsst dotsfill3');
    let dot4=document.getElementById('dotsst dotsfill4');
    let dot5=document.getElementById('dotsst dotsfill5');
    let dot6=document.getElementById('dotsst dotsfill6');
    let dot7=document.getElementById('dotsst dotsfill7');

    let y = section2.scrollTop;

    
    if (y > 700 && y < 1000) {       

ring.style.strokeDasharray="130, 1000";
if(ring.style.strokeDasharray == "130, 1000"){
dot2.style.fill="rgb(0, 146, 255)"; 
dot2.style.opacity="1";  
}
        let image1 = document.querySelector('.image3');
        image1.classList.add('animation3');
        let image2 = document.querySelector('.image4');
        image2.classList.add('animation4');
        section2.style.backgroundColor = "rgb(3, 3, 80)";
section1.style.backgroundColor = "rgb(119, 0, 255)";
circle.style.backgroundColor = "rgb(119, 0, 255)";
scrolls.children[1].classList.add('active');
scrolls.children[1].classList.add('popit');
scrolls.children[0].classList.remove('active');
scrolls2.children[0].classList.remove('actives');
scrolls2.children[1].classList.add('popit2');
scrolls2.children[1].classList.add('actives');
scrolls3.children[1].classList.add('activeses');

dot3.style.fill="rgb(247, 250, 252)";
dot3.style.opacity="0.5";


document.querySelector('.dotsstro3').style.strokeWidth="0";
document.querySelector('.dotsstro2').style.strokeWidth="2";
document.querySelector('.h2-part2').children[1].classList.add('activate');
document.querySelector('.h2-part2').children[0].classList.remove('activate');
document.querySelector('.h3-part3').children[1].classList.add('activate');
document.querySelector('.h3-part3').children[0].classList.remove('activate');
document.querySelector('.h4-part4').children[1].classList.add('activated');
document.querySelector('.h4-part4').children[0].classList.remove('activated');
scrolls3.children[1].classList.add('popit3');
scrolls3.children[0].classList.remove('activeses');


}
else{
        let image1 = document.querySelector('.image3');
        image1.classList.remove('animation3');
        
        scrolls.children[1].classList.remove('active');
scrolls2.children[1].classList.remove('actives');
scrolls3.children[1].classList.remove('activeses');

       
        let image2 = document.querySelector('.image4');
        
        image2.classList.remove('animation4'); 
        document.querySelector('.h2-part2').children[1].classList.remove('activate');
        document.querySelector('.h3-part3').children[1].classList.remove('activate');
        document.querySelector('.h4-part4').children[1].classList.remove('activated');
ring.style.strokeDasharray="10, 1000";
        
       

        
        
        }

    if (y > 1400 && y < 1800) {
        
        ring.style.strokeDasharray="280, 1000";
        if(ring.style.strokeDasharray == "280, 1000"){
            dot3.style.fill="rgb(0, 146, 255)"; 
dot3.style.opacity="1";  

            }
        let image3 = document.querySelector('.image5');
        image3.classList.add('animation5');
        section2.style.backgroundColor = "rgb(3, 3, 80)";
        section1.style.backgroundColor = "rgb(30, 14, 172)";
        circle.style.backgroundColor = "rgb(30, 14, 172)";
        let image4 = document.querySelector('.image6');
        image4.classList.add('animation6');
        scrolls.children[2].classList.add('active');
scrolls2.children[2].classList.add('actives');
scrolls3.children[2].classList.add('activeses');

scrolls.children[2].classList.add('popit');
scrolls2.children[2].classList.add('popit2');
scrolls3.children[2].classList.add('popit3');

//dot3.style.fill="rgb(0, 146, 255)";
dot4.style.fill="rgb(247, 250, 252)";
dot4.style.opacity="0.5";

document.querySelector('.dotsstro4').style.strokeWidth="0";
document.querySelector('.dotsstro3').style.strokeWidth="2";
        scrolls.children[1].classList.remove('active');
        scrolls3.children[1].classList.remove('activeses');
        document.querySelector('.h2-part2').children[2].classList.add('activate');
        document.querySelector('.h3-part3').children[2].classList.add('activate');
        document.querySelector('.h4-part4').children[2].classList.add('activated');

       
    }
    else{   
        let image3 = document.querySelector('.image5');
        image3.classList.remove('animation5');
        scrolls.children[2].classList.remove('active');
scrolls2.children[2].classList.remove('actives');
scrolls3.children[2].classList.remove('activeses');

        ring.style.strokeDasharray="130, 1000";
        let image4 = document.querySelector('.image6');
        image4.classList.remove('animation6');
        document.querySelector('.h2-part2').children[2].classList.remove('activate');
        document.querySelector('.h3-part3').children[2].classList.remove('activate');
        document.querySelector('.h4-part4').children[2].classList.remove('activated');
         
       
       
        }

    if (y > 2000 && y < 2800) {
        let image5 = document.querySelector('.image7');
        image5.classList.add('animation7');       
        let image6 = document.querySelector('.image8');
        image6.classList.add('animation8');
        let image7 = document.querySelector('.image9');
        image7.classList.add('animation9');
        let image8 = document.querySelector('.image10');
        image8.classList.add('animation10');
        scrolls.children[3].classList.add('active');
scrolls.children[3].classList.add('popit');
scrolls2.children[3].classList.add('popit2');
scrolls3.children[3].classList.add('activeses');
scrolls3.children[2].classList.remove('activeses');

        scrolls.children[2].classList.remove('active');
scrolls2.children[3].classList.add('actives');

        section2.style.backgroundColor = "black";
        section1.style.backgroundColor = "rgb(40, 38, 58)";
        circle.style.backgroundColor = "rgb(40, 38, 58)";
        ring.style.strokeDasharray="410, 1000";
dot4.style.fill="rgb(0, 146, 255)";
dot4.style.opacity="1"; 

dot5.style.fill="rgb(247, 250, 252)";
dot5.style.opacity="0.5";

document.querySelector('.dotsstro5').style.strokeWidth="0";
document.querySelector('.dotsstro4').style.strokeWidth="2";       
document.querySelector('.h2-part2').children[3].classList.add('activate');
document.querySelector('.h3-part3').children[3].classList.add('activate');
document.querySelector('.h4-part4').children[3].classList.add('activated');
scrolls3.children[3].classList.add('popit3');

    }
     else{       
        let image5 = document.querySelector('.image7');
        image5.classList.remove('animation7');
        let image6 = document.querySelector('.image8');
        image6.classList.remove('animation8');
        let image7 = document.querySelector('.image9');
        image7.classList.remove('animation9');
        let image8 = document.querySelector('.image10');
        image8.classList.remove('animation10');
        scrolls.children[3].classList.remove('active'); 
scrolls2.children[3].classList.remove('actives');
scrolls3.children[3].classList.remove('activeses');

        document.querySelector('.h2-part2').children[3].classList.remove('activate');
        document.querySelector('.h3-part3').children[3].classList.remove('activate');
        document.querySelector('.h4-part4').children[3].classList.remove('activated');
      
       

     
    }

    if (y > 2800 && y < 3400) {
        let image9 = document.querySelector('.image11');
        image9.classList.add('animation11')
        let image10 = document.querySelector('.image12');
        image10.classList.add('animation12');
        let image11 = document.querySelector('.image13');
        image11.classList.add('animation13');
        let image12 = document.querySelector('.image14');
        image12.classList.add('animation14');
        circle.style.backgroundColor = "rgb(21, 73, 218)";
        section1.style.backgroundColor = "rgb(21, 73, 218)";
        section2.style.backgroundColor = "rgb(21, 155, 218)";
        scrolls.children[4].classList.add('active');
scrolls2.children[4].classList.add('actives');
scrolls3.children[4].classList.add('activeses');

        scrolls.children[4].classList.add('popit'); 
scrolls2.children[4].classList.add('popit2');
scrolls3.children[4].classList.add('popit3');

        scrolls.children[3].classList.remove('active');
        ring.style.strokeDasharray="540, 1000";
        document.querySelector('.dotsstro5').style.strokeWidth="2";
dot5.style.fill="rgb(0, 146, 255)";
dot5.style.opacity="1"; 
dot6.style.fill="rgb(247, 250, 252)";
dot6.style.opacity="0.5";

document.querySelector('.dotsstro6').style.strokeWidth="0";     
document.querySelector('.h2-part2').children[4].classList.add('activate');
document.querySelector('.h3-part3').children[4].classList.add('activate');
document.querySelector('.h4-part4').children[4].classList.add('activated');


            }
             else {
        scrolls.children[4].classList.remove('active');
scrolls2.children[4].classList.remove('actives');
scrolls3.children[4].classList.remove('activeses');

        document.querySelector('.h2-part2').children[4].classList.remove('activate');
        document.querySelector('.h3-part3').children[4].classList.remove('activate');
        document.querySelector('.h4-part4').children[4].classList.remove('activated');
        let image9 = document.querySelector('.image11');
        image9.classList.remove('animation11')
        let image10 = document.querySelector('.image12');
        image10.classList.remove('animation12');
        let image11 = document.querySelector('.image13');
        image11.classList.remove('animation13');
        let image12 = document.querySelector('.image14');
        image12.classList.remove('animation14');
       
   
       
    }



    if (y > 3400 ) {
        circle.style.backgroundColor = "rgb(4, 148, 52)";
        section1.style.backgroundColor = "rgb(4, 148, 52)";
        section2.style.backgroundColor = "rgb(0, 255, 85)";
        scrolls.children[5].classList.add('active');
        scrolls.children[5].classList.add('popit'); 
scrolls2.children[5].classList.add('popit2');
scrolls3.children[5].classList.add('popit3');
scrolls3.children[5].classList.add('activeses');

        scrolls.children[4].classList.remove('active');
        document.querySelector('.dotsstro6').style.strokeWidth="2";
        dot6.style.fill="rgb(0, 146, 255)";
        dot6.style.opacity="1";  
        document.querySelector('.h2-part2').children[5].classList.add('activate');
        document.querySelector('.h3-part3').children[5].classList.add('activate');
        document.querySelector('.h4-part4').children[5].classList.add('activated');
        ring.style.strokeDasharray="680, 1000";
        scrolls2.children[5].classList.add('actives');
        let image13 = document.querySelector('.images14');
        image13.classList.add('animations14');
        let image14 = document.querySelector('.images15');
        image14.classList.add('animations15');
document.querySelector('.temps').children[1].classList.add('temps1');
document.querySelector('.temps').children[1].classList.add('act');

    }
     else{
         document.querySelector('.h2-part2').children[5].classList.remove('activate');
         document.querySelector('.h3-part3').children[5].classList.remove('activate');
         document.querySelector('.h4-part4').children[5].classList.remove('activated');
         scrolls.children[5].classList.remove('active');
        scrolls2.children[5].classList.remove('actives');
        scrolls3.children[5].classList.remove('activeses');
        let image13 = document.querySelector('.images14');
        image13.classList.remove('animations14');
        let image14 = document.querySelector('.images15');
        image14.classList.remove('animations15');
       
       

    }

    



if( y > 4000 ){
   ring.style.strokeDasharray="1000, 1000";
   let image15 = document.querySelector('.images16');
   image15.classList.add('animation16'); 
   section1.style.backgroundColor = "rgb(0, 47, 255)";
   circle.style.backgroundColor = "rgb(0, 47, 255)";
   document.querySelector('.dotsstro7').style.strokeWidth="2";
   dot7.style.fill="rgb(0, 146, 255)";
   dot7.style.opacity="1";  
document.querySelector('.h2-part2').children[6].classList.add('activate');
document.querySelector('.h3-part3').children[6].classList.add('activate');
document.querySelector('.h3-part3').children[5].classList.remove('activate');
document.querySelector('.h2-part2').children[5].classList.remove('activate');
document.querySelector('.h4-part4').children[6].classList.add('activated');
document.querySelector('.h4-part4').children[5].classList.remove('activated');
scrolls3.children[6].classList.add('popit3');
scrolls3.children[6].classList.add('activeses');
document.getElementById('section2').classList.add('.add-image');
scrolls3.children[5].classList.remove('activeses');
scrolls.children[6].classList.add('active');
scrolls.children[5].classList.remove('active'); 
scrolls2.children[6].classList.add('actives');
scrolls2.children[5].classList.remove('actives');
scrolls.children[6].classList.add('popit');
scrolls2.children[6].classList.add('popit2');
document.getElementById('section2').style.backgroundImage="url('interior.jpg')";
}else{
   let image15 = document.querySelector('.images16');
    image15.classList.remove('animation16');
document.querySelector('.h2-part2').children[6].classList.remove('activate');
scrolls3.children[6].classList.remove('activeses');
dot7.style.fill="rgb(245, 248, 250)";
   dot7.style.opacity="0.5";
   document.querySelector('.dotsstro7').style.strokeWidth="0";
scrolls.children[6].classList.remove('active');
scrolls2.children[6].classList.remove('actives');
document.querySelector('.h3-part3').children[6].classList.remove('activate');
document.getElementById('section2').style.backgroundImage="none";   
document.querySelector('.h4-part4').children[6].classList.remove('activated');

}

if (y == 0) {
        
    let image = document.querySelector('.image1');
    image.classList.add('animation1');
    ring.style.strokeDasharray="10, 1000";
    let imaged = document.querySelector('.image2');
    imaged.classList.add('animation2');
    section2.style.backgroundColor = "white";
    circle.style.backgroundColor = "rgb(184, 5, 184)";
    section1.style.backgroundColor = "rgb(184, 5, 184)";
    scrolls.children[0].classList.add('active');
    scrolls2.children[0].classList.add('actives');
    scrolls3.children[0].classList.add('activeses');
scrolls.children[0].classList.add('popit');
scrolls3.children[0].classList.add('popit3');

dot2.style.fill="rgb(247, 250, 252)";
dot2.style.opacity="0.5";
document.querySelector('.dotsstro2').style.strokeWidth="0";
document.querySelector('.h2-part2').children[0].classList.add('activate');
document.querySelector('.h3-part3').children[0].classList.add('activate');
document.querySelector('.h4-part4').children[0].classList.add('activated');
document.querySelector('.temps').children[0].classList.add('temps1');
document.querySelector('.temps').children[0].classList.add('act');


} 
else{
    let image = document.querySelector('.image1');
    image.classList.remove('animation1');
    let imaged = document.querySelector('.image2');
    imaged.classList.remove('animation2');
    scrolls.children[0].classList.remove('active');   
    document.querySelector('.temps').children[0].classList.remove('temps1'); 
document.querySelector('.temps').children[0].classList.remove('act');

}





}


let indexes=0;


function scrollslides(){

    indexes = indexes + 1;
    let sliders=document.querySelector('.slider-main .sliders');            
            let a = sliders.children[parseInt(indexes)];
            a.scrollIntoView(true);
if(indexes == 1){
let dots=document.querySelector('.slider-main .dots');
dots.children[1].style.backgroundColor="white";
}
else{
    let dots=document.querySelector('.slider-main .dots');
    dots.children[1].style.backgroundColor="grey";
}

if(indexes == 2){

    let dots=document.querySelector('.slider-main .dots');
    dots.children[2].style.backgroundColor="white";    
    }
    else{
        let dots=document.querySelector('.slider-main .dots');
        dots.children[2].style.backgroundColor="grey";
    }



    if(indexes == 3){

        let dots=document.querySelector('.slider-main .dots');
        dots.children[3].style.backgroundColor="white";
        
        }
        else{
            let dots=document.querySelector('.slider-main .dots');
            dots.children[3].style.backgroundColor="grey";
        }
         
        if(indexes == 4){

            let dots=document.querySelector('.slider-main .dots');
            dots.children[4].style.backgroundColor="white";
            
            }
            else{
                let dots=document.querySelector('.slider-main .dots');
                dots.children[4].style.backgroundColor="grey";
            }

            if(indexes == 5){

                let dots=document.querySelector('.slider-main .dots');
                dots.children[5].style.backgroundColor="white";
                
clearInterval(clear);
                }
                
            
}

let clear=setInterval(scrollslides, 3000);






