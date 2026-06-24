const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (token) {
    document.getElementById("loginBtn")?.classList.add("hidden");
    document.getElementById("logoutBtn")?.classList.remove("hidden");
  } else {
    document.getElementById("loginBtn")?.classList.remove("hidden");
    document.getElementById("logoutBtn")?.classList.add("hidden");
  }
});

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}