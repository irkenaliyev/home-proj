$('.client-cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2
  });

// let output = document.getElementById("output");
// let words=["Lorem ipsum dolor sit amet, <br>   consectetur adipisicing elit. Autem <br> commodi eligendi facilis.", "adadadada"];
// let chatTurn = 0;
// printMessage();

// function printMessage(){
//   if(chatTurn<=words[0].length){
//     output.innerHtml = words[0].substr(0, chatTurn);
//     chatTurn++;
//     setTimeout(printMessage, 300);
//   }else{
//     setTimeout(deleteMessage, 1000);
//   }
  
// }

// function deleteMessage(){
//   output.innerHtml = words[0].substr(0, chatTurn);
//   chatTurn--;
//   setTimeout(deleteMessage,200);
// }