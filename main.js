let prev = document.getElementById("prev");
let next = document.getElementById("next");
let div = document.querySelector("div");
let img = document.querySelector("img");
let count = 0;
// let arrayOfImages = []

prev.addEventListener("click", function () {
  if (count <= 0) {
    count = 5;
    img.src = `images/image${count}.jpg`;
    count--;
  } else if (count >= 0) {
    count--;
    img.src = `images/image${count}.jpg`;
  }
});

next.addEventListener("click", function () {
  if (count < 5) {
    count++;

    img.src = `images/image${count}.jpg`;
  } else if (count >= 5) {
    count = 0;
    img.src = `images/image${count}.jpg`;
  }
});
