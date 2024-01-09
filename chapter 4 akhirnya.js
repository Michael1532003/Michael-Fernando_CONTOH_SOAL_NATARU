
//1.
function getarea(length,width){
    return length*width
}
function getPerimeter(length,width){
    return length*2+width*2
}

//2. menerapkan fungsi faktorial
function factorial(n){
     if (n==0 || n==1)
     return 1
     else
     return n*factorial(n-1)
    }
//3. deklarasi var konstan, dengan nilai math.PI
const PI = Math.PI;
function getluaskel(r) {
    const luas = PI * r * r;
    const keliling = 2 * PI * r;
    return {
        luas: luas,
        keliling: keliling
    }
}


//4.
function adnilai(score){
    if (score>=25)
        return "A"
    else if (score>=20)
        return "B"
    else if (score>= 15)
        return "C"
    else if (score>= 10)
        return "D"
    else if (score>= 5)
        return "E"
    else
        return "F"
}

//5.
function getletter(s) {
    const firstchar = s[0];
    switch (firstchar){
        case"a":
        case"i":
        case"u":
        case"e":
        case"o":
            return "A";
        case"b":
        case"c":
        case"d":
        case"f":
        case"g":
            return "B";
        case"h":
        case"j":
        case"k":
        case"l":
        case"m":
            return "C";
        case"n":
        case"p":
        case"q":
        case"r":
        case"s":
        case"t":
        case"v":
        case"w":
        case"x":
        case"y":
        case"z":
            return "D";
    }
}
//6.
function findsecondlargest(arr){
    unique_arr =sorted(set(arr), reverse=True)
    if (length(unique_arr)>=2) {
        return unique_arr[1]
    }
    else{
        return None
}}

//7.
const perpustakaan = [
    {
        nama_buku: "Buku A",
        nama_penulis: "Penulis A",
        dibaca: true
    },
    {
        nama_buku: "Buku B",
        nama_penulis: "Penulis B",
        dibaca: false
    },
    {
        nama_buku: "Buku C",
        nama_penulis: "Penulis C",
        dibaca: true
    }
];

for (let i = 0; i < perpustakaan.length; i++) {
    const buku = perpustakaan[i];
    
    if (buku.dibaca) {
        console.log(`Sudah membaca '${buku.nama_buku}' oleh ${buku.nama_penulis}.`);
    } else {
        console.log(`Anda masih perlu membaca '${buku.nama_buku}' oleh ${buku.nama_penulis}.`);
    }
}

//8.
var library = [
    {
        author:"Bill Gates",
        title:"The Road Ahead",
        libraryid: 1254
    },
    {
        author:"Steve Jobs",
        title:"Walter Isaacson",
        libraryid: 4264
    },
    {
        author:"Suzanne Collins",
        title:"Mockingjay: The Final Book of The Hunger Games",
        libraryid:3245
    }
]
const libraryterurut = library.sort((a, b) => a.nama_buku.localecompare(b.nama_buku));

for (let i = 0; i < libraryterurut.length; i++) {
    const buku = libraryterurut[i];
    console.log(`Judul buku: ${buku.title} Penulis: ${buku.author}`);
}