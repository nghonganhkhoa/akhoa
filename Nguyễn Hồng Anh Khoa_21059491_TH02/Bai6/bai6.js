const form = document.querySelector('form');

form.addEventListener('submit', (event) => )
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  let hasError = false;

  if (!username) {
    setError(usernameInput, 'Vui lòng nhập tên đăng nhập');
    hasError = true;
  } else {
    removeError(usernameInput);
  }

  if (!password) {
    setError(passwordInput, 'Vui lòng nhập mật khẩu');
    hasError = true;
  } else {
    removeError(passwordInput);
  }

  if (!hasError) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      username,
      password,
    }));

    xhr.onload = () => }
      