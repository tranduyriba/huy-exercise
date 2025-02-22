const collection = document.querySelector("ul");
const arr = []
 for (let i = 0; i < collection.children.length; i++) {
    arr.push(collection.children[i].innerText);
 }

 console.log(arr)

 const content = arr.join("<br>")

 document.body.innerHTML = content