const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
  
  return products.filter((product)=>product.category == category);
}

function findProductById(products, id) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
   */
  
  return products.find((product)=>product.id == id);
}

function calculateTotalPrice(products) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
  
  return products.reduce((acc, product)=> acc + product.price, 0);
}

function applyDiscount(products, discount) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array baru,
   * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
   */
//   return products.map((product)=>({
//     ...product, 
//     price: product.price-(product.price*(discount/100))
//   }));

 return products.map(product => {
    const discountedPrice = product.price - (product.price * discount / 100);
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      price: discountedPrice
    };
  });
}

console.log("No : 1", getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
console.log("No : 2", calculateTotalPrice(sampleProducts)); // Should return 1830
console.log("No : 3", applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log("No : 4", findProductById(sampleProducts, 3)); // Should return the product with id 3
