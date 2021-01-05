

// Write Javascript code!

let keydownOn = true;
let keypressOn = true;
let keyupOn = true;

function getModifierState(event) {
  let modifier = "";
  if (
    event.getModifierState("ScrollLock") ||
    event.getModifierState("Scroll")
  ) {
    modifier = modifier + "ScrollLock" + " ";
  }
  if (event.getModifierState("Control")) {
    modifier = modifier + "Control" + " ";
  }
  if (event.getModifierState("Alt")) {
    modifier = modifier + "Alt" + " ";
  }
  if (event.getModifierState("Meta")) {
    modifier = modifier + "Meta" + " ";
  }
  if (event.getModifierState("Shift")) {
    modifier = modifier + "Shift" + " ";
  }
  if (event.getModifierState("NumLock")) {
    modifier = modifier + "NumLock" + " ";
  }
  if (event.getModifierState("CapsLock")) {
    modifier = modifier + "CapsLock" + " ";
  }

  return modifier;
}

function addRow(event) {
  document.getElementById("key-id").innerHTML = `<mark>${event.key}</mark>`;
  const curIndx = document.getElementById("event-table-body").rows.length;
  const row = document.getElementById("event-table-body").insertRow(curIndx);
  const data = [
    event.type,
    event.which,
    event.keyCode,
    event.key,
    event.code,
    event.shiftKey,
    event.altKey,
    event.ctrlKey,
    event.metaKey,
    getModifierState(event)
  ];
  for (let counter = 0; counter <= data.length - 1; counter++) {
    const cell = row.insertCell(counter);
    cell.innerHTML = `<span class='v-${data[counter]}'>${data[counter]}</span>`;
  }
  window.scrollTo(0, document.body.scrollHeight);
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
