// This is a basic script file that could be expanded if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded!');
    
    // You could add interactivity here if needed
    const fileSections = document.querySelectorAll('.file-section');
    
    fileSections.forEach(section => {
        section.addEventListener('click', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
    });
});