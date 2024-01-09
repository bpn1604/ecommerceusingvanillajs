//add your js code here 
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the entered email and password match with the stored userInfo
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const storedUser = JSON.parse(storedUserInfo);
      if (email === storedUser.email && password === storedUser.password) {
        // Redirect to index.html
        window.location.href = 'index.html';
      } else {
        alert('Incorrect email or password. Please try again.');
      }
    } else {
      alert('User information not found in local storage. Please sign up.');
    }
  });