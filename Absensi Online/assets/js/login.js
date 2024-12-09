document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "ibnusz" && password === "anjaymabar") {
      window.location.href = "https://sites.google.com/view/ibnuarchive/";
    } else {
      alert("Username atau password salah!");
    }
  });
