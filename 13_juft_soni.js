// 13-Topshiriq: 1 dan N gacha juft sonlar soni
let n = parseInt(prompt("N ni kiriting:"));
let count = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) count++;
}
alert(`1 dan ${n} gacha juft sonlar soni: ${count}`);
