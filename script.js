
document.addEventListener('DOMContentLoaded', function() {
    const majorBtn = document.querySelector('.buttons button:nth-child(1)');
    const minorBtn = document.querySelector('.buttons button:nth-child(2)');
    const majorProjects = document.querySelector('.major');
    const minorProjects = document.querySelector('.minor');

    // Show major projects by default
    majorProjects.style.display = 'block';
    minorProjects.style.display = 'none';
    majorBtn.classList.add('active');

    majorBtn.addEventListener('click', () => {
        majorProjects.style.display = 'block';
        minorProjects.style.display = 'none';
        majorBtn.classList.add('active');
        minorBtn.classList.remove('active');
    });

    minorBtn.addEventListener('click', () => {
        minorProjects.style.display = 'block';
        majorProjects.style.display = 'none';
        minorBtn.classList.add('active');
        majorBtn.classList.remove('active');
    });
});
