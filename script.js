// All pages checkbox
const allPagesInput = document.getElementById("all-pages");
// Individual page checkboxes
const pageInputs = Array.from(
  document.querySelectorAll(".page-checkbox")
);

function setAllPages(checked) {
  pageInputs.forEach((input) => {
    input.checked = checked;
  });
}

function syncAllPagesState() {
  const allChecked = pageInputs.every((input) => input.checked);
  allPagesInput.checked = allChecked;
}

// When "All pages" changes -> update all page checkboxes
allPagesInput.addEventListener("change", (event) => {
  setAllPages(event.target.checked);
});

// When any individual page checkbox changes -> recompute "All pages"
pageInputs.forEach((input) => {
  input.addEventListener("change", syncAllPagesState);
});

// Optional: handle the Done button
const doneButton = document.querySelector(".primary-btn");
doneButton.addEventListener("click", () => {
  const selected = pageInputs
    .filter((input) => input.checked)
    .map((input) => input.dataset.page);

const message =
  selected.length === pageInputs.length
    ? "All pages selected"
    : selected.length === 0
      ? "No pages selected"
      : `Selected pages: ${selected.join(", ")}`;

console.log(message);
});

syncAllPagesState();
