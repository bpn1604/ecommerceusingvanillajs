//add your js code here
function signup() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const userInfo = {
      fullname: fullname,
      email: email,
      phone: phone,
      password: password
    };

    // Convert the userInfo object to a JSON string
    const userInfoJSON = JSON.stringify(userInfo);

    // Store the JSON string in local storage with the key 'userInfo'
    
    localStorage.setItem('userInfo', userInfoJSON);

    alert('Sign up successful! User information stored in local storage.');

    // You can redirect or perform any other action after successful signup
  }
