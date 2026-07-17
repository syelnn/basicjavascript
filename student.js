const student = {
    nama: "Budi",
    umur: 20,
    jurusan: "Teknik Informatika",
    sudahLulus: false, 
    hobi: ["Gaming", "Membaca", "Ngoding"] 
};

// 2. Menampilkan output ke console
console.log("Nama\t\t: " + student.nama);
console.log("Umur\t\t: " + student.umur);
console.log("Jurusan\t\t: " + student.jurusan);

// Mengubah boolean menjadi string "Lulus" atau "Belum" dengan conditional (ternary) operator
console.log("Status Lulus\t: " + (student.sudahLulus ? "Lulus" : "Belum"));

console.log("Hobi:");

console.log("1. " + student.hobi[0]);
console.log("2. " + student.hobi[1]);
console.log("3. " + student.hobi[2]);