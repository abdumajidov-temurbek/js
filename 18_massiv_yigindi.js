// 18-Topshiriq: Massiv elementlari yig'indisi
let arr = [1, 4, 8, 9, 10, 32, 22, 45];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Massiv:", arr);
console.log("Yig'indi:", sum);
alert(`arr = [${arr}]\nMassiv yig'indisi: ${sum}`);
