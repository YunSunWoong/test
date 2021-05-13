let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript",
"Learn to Python","Learn to Ruby"];
let selectString = stringArr[0];

// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);