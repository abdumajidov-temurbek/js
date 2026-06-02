// 10-Topshiriq: 1 dan N gacha sonlar yig'indisi
let n = parseInt(prompt("N ni kiriting:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
alert(`1 dan ${n} gacha sonlar yig'indisi: ${sum}`);
