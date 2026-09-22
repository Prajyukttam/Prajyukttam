// Tab Switching Logic for Schedule Section
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active state from all buttons & content blocks
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Activate selected button and matching schedule tab
      button.classList.add('active');
      const targetDay = button.getAttribute('data-day');
      document.getElementById(targetDay).classList.add('active');
    });
  });
});