// Напиши скрипт управління формою логіна.

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refsHw4 = {
  form: document.querySelector(".login-form"),
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const email = refsHw4.form.elements.email.value.trim();
  const password = refsHw4.form.elements.password.value.trim();
  const formData = {
    email,
    password,
  };

  if (Object.values(formData).includes("")) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(formData);
  refsHw4.form.reset();
};

refsHw4.form.addEventListener("submit", onFormSubmit);
