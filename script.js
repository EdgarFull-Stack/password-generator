//1.
const Generatebutton = document.querySelector("generatePasswordBtn");
const Copybutton = document.querySelector("copyPasswordBtn");
Generatebutton.addEventListener("click", generatePassword);
Copybutton.addEventListener("click", copypaste);
//2.
function generatePassword() {
  const lenght = document.querySelector("passwordLenght").value;
  const uppercase = document.querySelector("includeUppercase").checked;
  const includenumbers = document.querySelector("includeNumbers").checked;
  const includesymbols = document.querySelector("includeSymbols").checked;

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  //3.
  let generator = lowercaseLetters;
  if (includenumbers) generator += numbers;
  if (includesymbols) generator += symbols;
  if (uppercase) generator += uppercaseLetters;
}
//last
function copypaste() {
  const passwordText = document.getElementById("passwordOutput").innerHTML;
  if (passwordText) {
    navigator.clipboard
      .writeText(passwordText)
      .then(() => {
        alert("Password copied to clipboard");
      })
      .catch(() => {
        alert("Failed to copy password");
      });
  } else {
    alert("No password to copy");
  }
}
