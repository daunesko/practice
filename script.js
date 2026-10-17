const nameInput = document.querySelector("#visitor-name");
const joinButton = document.querySelector("#join-button");
const resetButton = document.querySelector("#reset-button");
const message = document.querySelector("#message");

const initialText = message.textContent;

function showMessage() {
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Введите имя.";
    nameInput.focus();
    return;
  }

  if (name.length < 2) {
    message.textContent = "Имя должно содержать минимум два символа.";
    nameInput.focus();
    return;
  }

  message.textContent = name + ", рады видеть вас в книжном клубе «Страница»!";
}

function resetMessage() {
  nameInput.value = "";
  message.textContent = initialText;
  nameInput.focus();
}

joinButton.addEventListener("click", showMessage);
resetButton.addEventListener("click", resetMessage);
