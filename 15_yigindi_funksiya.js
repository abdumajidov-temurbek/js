// 15-Topshiriq: Ikki sonning yig'indisini qaytaruvchi funksiya
function yigindi(a, b) {
    return a + b;
}
let a = parseFloat(prompt("Birinchi sonni kiriting:"));
let b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
let natija = yigindi(a, b);
alert(`yigindi(${a}, ${b}) = ${natija}`);
