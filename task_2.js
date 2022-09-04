const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function tampil(nama){
    console.log(nama);
}

function searchName(kata, batas, callback){
    let nama = [];

    for(let i = 0; i < name.length; i++){
        if(name[i].toLowerCase().includes(kata))
            nama.push(name[i]);

        if(nama.length == batas) break;
    }

    callback(nama)
}

searchName("an", 3, tampil);