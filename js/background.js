const images = [
    "0.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// append - 맨 아래
// prepend - 맨 위