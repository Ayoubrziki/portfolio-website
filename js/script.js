// Add interactivity as needed
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a click event to all project titles
    const projectTitles = document.querySelectorAll('.project h3');
    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            alert(`You clicked on ${title.textContent}`);
        });
    });
});
