function performSearch() {
  let input = document.getElementById("search");
  let filter = input.value.toLowerCase();
  let cells = document.getElementsByClassName("cell");
  let count = 0;
  
  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    let text = cell.textContent.toLowerCase();
    
    if (text.includes(filter)) {
      cell.classList.add("highlight");
      count++;
    } else {
      cell.classList.remove("highlight");
    }
  }
  
  let searchCount = document.getElementById("searchCount");
  
  if (count > 0) {
    searchCount.textContent = "Найдено совпадений: " + count;
  } else {
    searchCount.textContent = "Ничего не найдено";
  }
}
