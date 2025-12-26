<!-- Include Velocity.js first -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>

<script>
  // Select the theme toggle button by its ID
  const themeToggleBtn = document.getElementById('theme-toggle');
  let darkModeEnabled = false;

  themeToggleBtn.addEventListener('click', () => {
    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled) {
      // Animate to dark / high‑contrast theme
      Velocity(document.body, {
        backgroundColor: "#121212", // dark background
        color: "#f5f5f5"            // light high‑contrast text
      }, { duration: 500 });

      themeToggleBtn.textContent = "Light Mode";
    } else {
      // Animate back to light mode
      Velocity(document.body, {
        backgroundColor: "#ffffff", // light background
        color: "#000000"            // dark text
      }, { duration: 500 });

      themeToggleBtn.textContent = "Dark Mode";
    }
  });
</script>
