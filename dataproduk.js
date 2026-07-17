const produk = [
    { name: "Indomie", price: 3500, stock: 10 },
    { name: "Susu", price: 18000, stock: 0 },
    { name: "Roti", price: 12000, stock: 5 }
];

// perulangan buat setiap produk 
for (let i = 0; i < produk.length; i++) {
    let status = "";
    
    // penentuan status berdasarkan stok
    if (produk[i].stock > 0) {
        status = "Tersedia";
    } else if (produk[i].stock === 0) {
        status = "Habis";
    }
    
    // Menampilkan output
    console.log(produk[i].name);
    console.log("Harga: " + produk[i].price);
    console.log("Status: " + status);
    console.log("--------------------"); }