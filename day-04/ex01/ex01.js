function filterProductsByCategory(products, category) {
    return products.filter((product) => product.category === category)
}

let products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Shoes", category: "Clothing" },
];


console.log(filterProductsByCategory(products, "Electronics"));