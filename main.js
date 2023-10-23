//ÖDEV // kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData = prompt("Lütfen bir şeyler yazınız");
let userData = "Merhaba Dünya";
// S-1) Kaç karakterlidir ? (length)
console.log(userData.length);
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
console.log(userData.trim);
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
console.log(userData.toLowerCase());
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase());
console.log(userData.toUpperCase());
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
let userData1 = "Merhaba Erdem";
userData = userData.replace(userData, userData1);
console.log(userData);
console.log(userData.substring(4, 12));
console.log(userData.indexOf("Erdem"));
console.log(userData.lastIndexOf("Erdem"));
console.log(userData.replace("xxxxxxx"), "javascript");
console.log(
  userData.replace(userData1.substring(0, userData1.indexOf(" ")), "javascript")
);
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
console.log(userData1.startsWith("javascript ile mi başlıyor"));
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
console.log(userData1.endsWith("javascript ile mi başlıyor"));
// S-8) ilk harf nedir  ? (charAt())
console.log(userData.charAt(0));
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
console.log(userData.concat("-ben js öğreniyorum"));
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
console.log(userData.substring(0, 4));
