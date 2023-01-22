const generatePassword = document.getElementById('generate-password');
const passwordLength = document.getElementById('length');
const generatedPassword = document.getElementById('generated-password');
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';

generatePassword.addEventListener('click', function() {
  let password = '';
  for (let i = 0; i < passwordLength.value; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  generatedPassword.innerHTML = password;
  document.getElementById("password").style.display = "block";
});
