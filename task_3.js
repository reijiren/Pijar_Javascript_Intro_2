function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    //cek nilai awal harus lebih kecil
    if(nilaiAwal > nilaiAkhir) 
        return "Nilai akhir harus lebih besar dari nilai awal";

    //cek array
    if(!dataArray instanceof Array || dataArray.length <= 5)
        return "Data dalam array harus lebih dari 5";

    let hasil = [];

    //sort array
    let sortArr = dataArray.sort(function(a, b) {return a - b});

    //cari nilai
    for(let i = 0; i < dataArray.length; i++){
        if(sortArr[i] >= nilaiAwal && sortArr[i] <= nilaiAkhir){
            hasil.push(sortArr[i]);
        }
    }

    //tampilkan hasil
    if(hasil.length !== 0)
        return hasil;
    else
        return "Nilai tidak ditemukan";
}

console.log(seleksiNilai(6, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));