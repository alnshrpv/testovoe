const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const matchCount = document.getElementById("matchCount");

searchButton.addEventListener("click", function() {
  const searchValue = searchInput.value.toLowerCase();
  const cells = document.querySelectorAll(".cell");

  let matchCounter = 0;

  cells.forEach(cell => {
    const cellText = cell.textContent.toLowerCase();
    if (cellText.includes(searchValue)) {
      cell.classList.add("matched");
      matchCounter++;
    } else {
      cell.classList.remove("matched");
    }
  });

  matchCount.textContent = matchCounter > 0 ? `Найдено совпадений: ${matchCounter}` : "Ничего не найдено";
});
