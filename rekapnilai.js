const students = [
    { name: "Andi", score: 90 },
    { name: "Budi", score: 65 },
    { name: "Caca", score: 80 },
    { name: "Dina", score: 55 }
];

// Variabel penampung 
let totalSiswa = students.length;
let lulusCount = 0;
let tidakLulusCount = 0;
let totalSkor = 0;

// Looping untuk memproses data tiap siswa
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let grade = "";
    
    // 1. Menentukan Grade
    if (student.score >= 90 && student.score <= 100) {
        grade = "A";
    } else if (student.score >= 80 && student.score <= 89) {
        grade = "B";
    } else if (student.score >= 70 && student.score <= 79) {
        grade = "C";
    } else {
        grade = "D";
    }
    
    // 2. Menghitung jumlah lulus / tidak lulus
    if (student.score >= 70) {
        lulusCount++;
    } else {
        tidakLulusCount++;
    }
    
    // 3. Menambahkan skor ke total akumulasi nilai
    totalSkor += student.score;
    
    // Tampilkan data per siswa
    console.log("Nama: " + student.name);
    console.log("Nilai: " + student.score);
    console.log("Grade: " + grade);
    console.log(""); // Baris baru kosong sebagai pemisah
}

// 4. Hitung rata-rata nilai
let rataRata = totalSkor / totalSiswa;

// Menampilkan hasil rekap akhir keseluruhan siswa
console.log("=========================");
console.log("Jumlah Siswa : " + totalSiswa);
console.log("Lulus        : " + lulusCount);
console.log("Tidak Lulus  : " + tidakLulusCount);
console.log("Rata-rata    : " + rataRata);