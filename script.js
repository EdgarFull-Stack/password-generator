const Generatebutton = document.querySelector("generatePasswordBtn");
const Copybutton = document.querySelector("copyPasswordBtn");
Generatebutton.addEventListener("click", generatePassword);

function generatePassword() {
  const lenght = document.querySelector("passwordLenght").value;
  const uppercase = document.querySelector("includeUppercase").checked;
  const includenumbers = document.querySelector("includeNumbers").checked;
  const includesymbols = document.querySelector("includeSymbols").checked;

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
}
