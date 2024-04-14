document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra username và password ở đây
    if (username === "admin" && password === "admin") {
      alert("Đăng nhập thành công!");
      // Chuyển hướng đến trang khác sau khi đăng nhập thành công
      // window.location.href = 'dashboard.html';
    } else {
      document.getElementById("error").innerText =
        "Tên đăng nhập hoặc mật khẩu không đúng!";
    }
  });
