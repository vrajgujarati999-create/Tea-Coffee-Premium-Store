document.addEventListener("DOMContentLoaded", function () {

  let toggleBtn = document.getElementById("themeToggle");

  // ✅ APPLY SAVED THEME (ALL PAGES SYNC)
  document.body.classList.toggle(
    "dark",
    localStorage.getItem("theme") === "dark"
  );

  // update button text
  if (toggleBtn) {
    toggleBtn.innerText = document.body.classList.contains("dark")
      ? "☀️ Light"
      : "🌗 Dark";

    toggleBtn.onclick = function () {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerText = "☀️ Light";
      } else {
        localStorage.setItem("theme", "light");
        toggleBtn.innerText = "🌗 Dark";
      }
    };
  }

});