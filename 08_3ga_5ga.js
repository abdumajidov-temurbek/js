// 8-Topshiriq: Son 3 ga va 5 ga bo'linadimi
let n = parseInt(prompt("Son kiriting:"));
if (n % 3 === 0 && n % 5 === 0) {
    alert(n + " — 3 ga ham, 5 ga ham bo'linadi");
} else if (n % 3 === 0) {
    alert(n + " — faqat 3 ga bo'linadi");
} else if (n % 5 === 0) {
    alert(n + " — faqat 5 ga bo'linadi");
} else {
    alert(n + " — na 3 ga, na 5 ga bo'linmaydi");
}
