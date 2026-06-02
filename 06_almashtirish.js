// 6-Topshiriq: Uchinchi o'zgaruvchisiz sonlarni almashtirish (arifmetik amallar)
let a = parseInt(prompt("a ning qiymatini kiriting:"));
let b = parseInt(prompt("b ning qiymatini kiriting:"));
alert(`Almashtirishdan oldin: a=${a}, b=${b}`);
a = a + b;
b = a - b;
a = a - b;
alert(`Almashtirishdan keyin: a=${a}, b=${b}`);
