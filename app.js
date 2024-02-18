
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
    function login() {
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;

        if (username.trim() === "" || password.trim() === "") {
            var errorMessage = document.getElementById("loginErrorMessage");
            errorMessage.innerHTML = "Vui lòng nhập tài khoản và mật khẩu.";
            errorMessage.style.display = "block";
            return;
        }

        // Tiếp tục xử lý đăng nhập nếu tài khoản và mật khẩu không trống
        // ...

        // Sau khi xử lý đăng nhập thành công, bạn có thể chuyển hướng đến trang chủ
        window.location.href = "trangchu.html";
    }

    // Lưu thông tin đăng ký vào localStorage khi sự kiện submit của form xảy ra
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
  
    // Lấy giá trị của các trường input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Lưu thông tin đăng ký vào localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  
    // Xử lý thông báo hoặc chuyển hướng sau khi đăng ký thành công
  });
  
  // Kiểm tra thông tin đăng nhập khi sự kiện submit của form đăng nhập xảy ra
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
  
    // Lấy giá trị của các trường input
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
  
    // Lấy thông tin đăng ký từ localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    // Kiểm tra thông tin đăng nhập
    if (usernameInput === storedUsername && passwordInput === storedPassword) {
      // Đăng nhập thành công
      console.log("Đăng nhập thành công!");
  
      // Chuyển hướng đến trang chủ
      window.location.href = "trangchu.html"; // Thay thế "trangchu.html" bằng URL của trang chủ của bạn
    } else {
      // Đăng nhập không thành công
      console.log("Đăng nhập không thành công. Vui lòng kiểm tra thông tin đăng nhập!");
    }
  });