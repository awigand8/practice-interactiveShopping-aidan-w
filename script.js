window.addEventListener("load", () => {

const itemInput = document.getElementById("itemInput");
const button = document.getElementById("button");
const itemList = document.getElementById("shoppingList");

button.addEventListener("click", addItem);

function addItem() {
const text = itemInput.value.trim();
if (text === "") return;

//List
const li = document.createElement("li");
const span = document.createElement("span");
span.textContent = text;

//Edit Button
 const editButton = document.createElement("button");
 editButton.textContent = "Edit";
 editButton.addEventListener("click", () => {
    if (editButton.textContent === "Edit") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent

        li.insertBefore(input, span);
        li.removeChild(span);
        editButton.textContent = "Save";

    }  else {
        // Save mode
        const input = li.querySelector("input");
        const newText = input.value.trim();
        if (newText === "") return;

        const newSpan = document.createElement("span");
        newSpan.textContent = newText;

        li.insertBefore(newSpan, input);
        li.removeChild(input);
        editButton.textContent = "Edit";
      }
    });
 // --- Remove Button ---
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      li.remove();
    });

    // Add span and buttons to the list item
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    // Add the list item to the list
    itemList.appendChild(li);

    // Clear input field
    itemInput.value = "";
  }
})

