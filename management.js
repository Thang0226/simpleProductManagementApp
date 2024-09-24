let products = [
  "Macbook Air M1",
  "Macbook Air M2",
  "Macbook Air M3",
  "Macbook Pro M1",
  "Thinkpad X1 Carbon Gen 9",
  "Thinkpad X1 Carbon Gen 10",
  "HP Envy",
  "Thinkpad P16",
  "Thinkpad P15",
];
let ind = -1;

function displayProducts() {
  let s_table = "<table>";
  s_table += "<tr> <th>No.</th> <th>Product Name</th> <th></th></tr>";

  for (let i = 0; i < products.length; i++) {
    s_table += "<tr>";
    s_table += `<td>${
      i + 1
    }</td> <td class="product_name" onclick="fillTextEdit(${i})">${
      products[i]
    }</td> <td><button onclick="deleteProduct(${i})">Delete</button></td>`;
    s_table += "</tr>";
  }

  s_table += "</table>";
  document.getElementById("display").innerHTML = s_table;
}

function addNewProduct() {
  let new_product = document.getElementById("new_product").value;
  products.push(new_product);
  alert(`"${new_product}" is added to the product list!`);
  displayProducts();
}

function fillTextEdit(index) {
  document.getElementById("edit_item").value = products[index];
  ind = index;
}

function editProductName() {
  if (ind >= 0) {
    products[ind] = document.getElementById("edit_item").value;
  }
  displayProducts();
  ind = -1;
}

function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}
