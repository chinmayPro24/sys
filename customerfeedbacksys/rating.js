const img1 = document.getElementById("star#1");
const img2 = document.getElementById("star#2");
const img3 = document.getElementById("star#3");
const img4 = document.getElementById("star#4");

const rating1 = () => {
    img1.src = "img/star.png"
    localStorage.setItem("ratings", 1);
}
const rating2 = () => {
    img2.src = "img/star.png"
    localStorage.setItem("ratings", 2);
}
const rating3 = () => {
    img3.src = "img/star.png"
    localStorage.setItem("ratings", 3);
}
const rating4 = () => {
    img4.src = "img/star.png"
    localStorage.setItem("ratings", 4);
}