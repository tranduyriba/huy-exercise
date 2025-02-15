const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];

const searchKeyword = prompt("Nhập từ khóa cần tìm").toLowerCase();

const filterProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchKeyword));

if (filterProducts.length > 0){
    console.log("Các sản phẩm được tìm thấy:");
    filterProducts.forEach(product => console.log(`- ${product.name} (ID: ${product.id})`))
} else {
    console.log("Không tìm thấy sản phẩm nào!")
}
