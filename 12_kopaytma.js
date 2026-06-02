// 12-Topshiriq: 1 dan N gacha sonlar ko'paytmasi (faktorial)
let n = parseInt(prompt("N ni kiriting:"));
let product = 1;
for (let i = 1; i <= n; i++) {
    product *= i;
}
alert(`${n}! = ${product}`);
