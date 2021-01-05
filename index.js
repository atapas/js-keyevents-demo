// Import stylesheets
import "./style.css";

// Write Javascript code!

let keydownOn = true;
let keypressOn = true;
let keyupOn = true;

function addRow(event) {
  document.getElementById("key-id").innerHTML = `<mark>${event.key}</mark>`;
  const curIndx = document.getElementById("event-table-body").rows.length;
  const row = document.getElementById("event-table-body").insertRow(curIndx);
  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const cell4 = row.insertCell(4);
  const cell5 = row.insertCell(5);
  const cell6 = row.insertCell(6);
  const cell7 = row.insertCell(7);
  const cell8 = row.insertCell(8);
  cell0.innerHTML = `<span>${event.type}</span>`;
  cell1.innerHTML = `<span>${event.key}</span>`;
  cell2.innerHTML = `<span>${event.which}</span>`;
  cell3.innerHTML = `<span>${event.keyCode}</span>`;
  cell4.innerHTML = `<span>${event.code}</span>`;
  cell5.innerHTML = `<span>${event.shiftKey}</span>`;
  cell6.innerHTML = `<span>${event.altKey}</span>`;
  cell7.innerHTML = `<span>${event.ctrlKey}</span>`;
  cell8.innerHTML = `<span>${event.metaKey}</span>`;
}

const clearAll = event => {
  document.getElementById("event-table-body").innerHTML = "";
  document.getElementById("key-id").innerHTML = "";
};

document.addEventListener("keydown", function(event) {
  keydownOn && addRow(event);
});

document.addEventListener("keyup", function(event) {
  keyupOn && addRow(event);
});

document.addEventListener("keypress", function(event) {
  keypressOn && addRow(event);
});

document
  .getElementById("clear-all-id")
  .addEventListener("click", function(event) {
    clearAll(event);
  });

document
  .getElementById("keydown-cb-id")
  .addEventListener("click", function(event) {
    keydownOn = document.getElementById("keydown-cb-id").checked;
  });

document
  .getElementById("keypress-cb-id")
  .addEventListener("click", function(event) {
    keypressOn = document.getElementById("keypress-cb-id").checked;
  });

document
  .getElementById("keyup-cb-id")
  .addEventListener("click", function(event) {
    keyupOn = document.getElementById("keyup-cb-id").checked;
  });
