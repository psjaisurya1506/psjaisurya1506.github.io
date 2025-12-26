<script>
  // Get the toggle button element by its ID
  const themeToggleBtn = document.getElementById('theme-toggle');

  // When the button is clicked, toggle the "dark-mode" class on <body>
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Optional: Update button text based on current mode
    if(document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = "Light Mode";
    } else {
      themeToggleBtn.textContent = "Dark Mode";
    }
  });
</script>
