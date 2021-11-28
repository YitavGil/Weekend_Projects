function largeImg(event) {
    console.log((event));
    const show = document.getElementById("bigImg");
    if (event.target.id === "img1") {
      show.src = "/imgs/small/big1.jpg";
      
    }
    if (event.target.id === "img2") {
      show.src = "/imgs/small/big2.jpg";
    }
    if (event.target.id === "img3") {
      show.src = "/imgs/small/big3.jpg";
    }
    if (event.target.id === "img4") {
      show.src = "/imgs/small/big4.jpg";
    }
    if (event.target.id === "img5") {
      show.src = "/imgs/small/big5.jpg";
    }
    if (event.target.id === "img6") {
      show.src = "/imgs/small/big6.jpg";
    }
    if (event.target.id === "img7") {
      show.src = "/imgs/small/big7.jpg";
    }

    show.style.visibility = "visible";
}

function clearImg() {
  const img = document.getElementById("bigImg");
    img.src = "";
    img.style.visibility = "hidden";
}

function scrolLeft() {
  const left = document.querySelector(".carousel-wrapper");
  left.scrollLeft = 0;
}

function scrolRight() {
  const left = document.querySelector(".carousel-wrapper");
  left.scrollLeft = 1000;
}