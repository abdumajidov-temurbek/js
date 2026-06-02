// 20-Topshiriq: Massivdagi juft elementlarni alohida massivga joylashtirish
let arr = [1, 4, 8, 9, 10, 32, 22, 45];
let juftMassiv = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        juftMassiv.push(arr[i]);
    }
}
console.log("Asosiy massiv:", arr);
console.log("Juft elementlar massivi:", juftMassiv);
alert(`Asosiy: [${arr}]\nJuft elementlar: [${juftMassiv}]`);
