// 19-Topshiriq: Massivdagi eng katta elementni topish
let arr = [1, 4, 8, 9, 10, 32, 22, 45];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Massiv:", arr);
console.log("Eng katta element:", max);
alert(`arr = [${arr}]\nEng katta element: ${max}`);
