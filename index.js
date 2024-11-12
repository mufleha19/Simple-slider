var images = [
    "https://wowslider.com/sliders/demo-23/data1/images/landscape1344620.jpg",
    "https://wowslider.com/sliders/demo-23/data1/images/hohenschwangau532864.jpg",
    "https://wowslider.com/sliders/demo-23/data1/images/rieti106848.jpg",
    "https://wowslider.com/sliders/demo-23/data1/images/squantzpond209864.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1H9tZB4SLGjkK12DIEbz63fNFNutijr20KxCB3-unZOD_0okFE8Reo-9MMReIsIs8gI&usqp=CAU"
  ];

  currentIndex = 0;

  function next() {

  var currentImg = document.getElementById("slider-img");
       if (currentIndex === images.length - 1) {
    currentIndex = 0;
       } else {
     currentIndex++;
  }
    currentImg.src = images[currentIndex];
}

function prev() {

   var currentImg = document.getElementById("slider-img");
   
    if (currentIndex === 0) {
    currentIndex = images.length - 1;
  }   else {
     currentIndex--;
  }
     currentImg.src = images[currentIndex];
}