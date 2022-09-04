//Method bawaan JS
//1. Sort
//Untuk mengurutkan elemen array dari nilai terkecil sampai terbesar
//array.sort(compareFunction)
var num = [4, 2, 1, 3, 5];

//mengurutkan array num secara ascending
console.log(num.sort());

//2. Filter
//Untuk filtering array sesuai dengan kondisi yang diberikan
//array.filter(function(currentValue, index, arr), thisValue)
var arr = [10, 20, 30, 40, 50];

//filter nilai array yang lebih dari 23
console.log(arr.filter(element => element > 23));

//3. Concat
//Untuk menggabungkan 2 array atau lebih
//array.concat(array2, array3, ...)
var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c"];

//menggabungkan 2 array diatas
console.log(arr1.concat(arr2));

//4. Every
//Mengecek seluruh value dari array berdasarkan suatu kondisi, dan mereturn true or false
//array.every(function(currentValue, index, arr), thisValue)
var arr = [1, 2, 3, 4];

//mengecek apakah seluruh nilai dalam array lebih kecil dari 3
console.log(arr.every(num => num < 3));

//5. Some
//Sama seperti every, mengecek seluruh value dari array berdasarkan suatu kondisi
//Perbedaannya adalah every akan menghasilkan nilai TRUE jika SELURUH nilai memenuhi kondisi
//Sementara some akan menghasilkan TRUE ketika setidaknya SATU nilai memenuhi kondisi
//array.some(function(currentValue, index, arr), thisValue)
var arr = [1, 2, 3, 4];

//mengecek apakah ada nilai yang lebih kecil dari 3
console.log(arr.some(num => num < 3));

//6. Find
//Menghasilkan elemen yang pertama kali muncul dari sebuah kondisi yang diberikan
//array.find(function(currentValue, index, arr), thisValue)
var arr = [1, 2, 5, 8, 11];

//mengecek nilai yang pertama kali muncul setelah 2
console.log(arr.find(num => num > 2));

//7. FindIndex
//Menghasilkan index dari elemen yang pertama kali muncul dari sebuah kondisi yang diberikan
//array.findIndex(function(currentValue, index, arr), thisValue)
var arr = [11, 20, 30, 40, 50];

//mengecek index yang pertama kali muncul dengan kondisi nilai lebih dari 23
console.log(arr.findIndex(num => num > 23));

//8. IndexOf
//Menghasilkan index dari elemen yang memenuhi kondisi
//array.indexOf(item, start);
var buah = ["pisang", "melon", "durian", "melon"];

//menampilkan melon ada di index berapa
console.log(buah.indexOf("melon", 2));

//9. Includes
//Mengecek apakah nilai di dalam array sama dengan nilai yang diberikan
//array.includes(element, start)
var arr = [1, 2, 3, 4, 5];

//mengecek apakah ada nilai 1 dari array mulai dari index ke-2
console.log(arr.includes(1, 1));

//10. Reduce
//Mengecilkan array agar menghasilkan satu nilai saja, yaitu akumulasi
//dari seluruh nilai di dalam array. Biasa digunakan dengan operasi matematika
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
var arr = [1, 2, 3, 5];

//Akumulasi array
console.log(arr.reduce((total, current) => total + current));