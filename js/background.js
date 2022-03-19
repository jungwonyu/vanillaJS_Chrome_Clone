const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
const randomImg = document.querySelector("#bg-img");

const chosenImage = images[Math.floor(Math.random() * images.length)]; // array에서 랜덤하게 이미지 choose

const bgImage = document.createElement("img"); // js를 통해 html에 element 생성하기

randomImg.style.backgroundImage = `url(./img/${chosenImage})`;

// bgImage.src = `img/${chosenImage}`; // 랜덤 이미지가 나오도록 설정하기
// document.body.appendChild(bgImage); // body에 넣기
