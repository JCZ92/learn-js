window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  tdNode.classList.add('tdNode');
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButtonNode(text, event, func) {
  let buttonNode = document.createElement("button");
  buttonNode.textContent = text;
  buttonNode.addEventListener(event, func);
  buttonNode.classList.add('tdNode');
  return buttonNode;
}

function edit(node) {
  let textBox = document.createElement("input");
  textBox.type = "text";
  textBox.placeholder = "Enter Cell (x, y)";
  node.replaceChild(textBox, node.childNodes[0]);
}
function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButtonNode('Edit text', "click", ()=>{edit(col1)}));
    // let textBox = document.createElement("input");
    // textBox.type = "text";
    // textBox.placeholder = "Enter Cell (x, y)";
    // let button = document.createElement("button");
    // button.textContent = "Edit text";
    // col1.appendChild(button);
    // // Attach event listener to each button
    // button.addEventListener('click', function() {
    //   col1.innerHTML = '';
    //   col1.appendChild(textBox);
    //   col1.appendChild(button);
    // });
    // textBox.addEventListener('keypress', function(event) {
    //   if (event.key === "Enter") {
    //     col1.innerHTML = textBox.value;
    //     col1.appendChild(button);
    //   }
    // });
    // col1.appendChild(button);
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
