const listInput = document.querySelector(".list-input");
const listButton = document.querySelector(".list-button");
const list = document.querySelector(".list");
// const filterOption = document.querySelector(".filter-list");

listButton.addEventListener("click", addList);
list.addEventListener("click", deleteCheck);
// filterOption.addEventListener("click", filterList);

function addList(event) {
  event.preventDefault();

  const listDiv = document.createElement("div");
  listDiv.classList.add("llist");
  // create LI
  const newList = document.createElement("li");
  newList.innerText = listInput.value;
  newList.classList.add("list-item");
  listDiv.appendChild(newList);

  // check and mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  listDiv.appendChild(completedButton);

  // check and trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  listDiv.appendChild(trashButton);

  //   append to list
  list.appendChild(listDiv);

  listInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // delete list
  if (item.classList[0] === "trash-btn") {
    const llist = item.parentElement;
    llist.classList.add("fall");
    llist.addEventListener("transition", function () {
      llist.remove();
    });
  }
  // check mark
  if (item.classList[0] === "complete-btn") {
    const llist = item.parentElement;
    llist.classList.toggle("completed");
  }
}

//
// }
