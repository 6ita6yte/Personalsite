

  $(document).ready( function(){
    var size = $("#skills").css("fontSize");
    $("#skills").hover(
            function(){
                $(this).css("fontSize", "20px");
            }, 
            function(){
                $(this).css("fontSize", size);
            }
     );
});

$(document).ready( function(){
  var size = $("#it").css('color');
  $("#it").hover(
          function(){
              $(this).css('color', 'white');
          }, 
          function(){
              $(this).css('color', size);
          }
   );
});

$(document).ready( function(){
  var size = $("#skIT").css('color');
  $("#skIT").hover(
          function(){
              $(this).css('color', '#94DAFF');
          }, 
          function(){
              $(this).css('color', size);
          }
   );
});






    const hero=document.querySelector(".myImage");
    const stud=document.querySelector(".stu");
    const boxAr=document.querySelector(".box-area");
    // const hero=document.querySelector(".myImage");

    const tl=new TimelineMax();

   
    tl.fromTo(
      hero,1,
      {height: "0%"}, 
      {height: '250px', ease: Power2.easeInOut}
      ).fromTo(
        hero,
        1.2,
        {height: "70%"}, 
      {height: '250px', ease: Power2.easeInOut}
        
      )
      .fromTo(stud, 0.5, {opacity:0, x:30}, {opacity:1, x:0}, "-=0.5");
      ///////////////////////////////////////////////////////
  //     const text=document.querySelector('.my');
  //     const strText=text.textContent;
  //     const splitText=strText.split("");
  //     text.textContent =" ";
  //     fro(let i = 0; i<splitText.length;i++){
  //       text.innerHTML += "<span>"+splitText[i] + "</span>";
  //     }
  // let char =0;
  // let timer=setInterval(onTick, 50);
  // function onTick(){
  //   const span =text.querySelectorAll('span')[char];
  //   span.classList.add('fade');
  //   char++
  //   if(char === splitText.length){
  //     complete();
  //     return;
  //   }
  // }
  // function complete(){
  //   clearInterval(timer);
  //   timer= null;
  // }