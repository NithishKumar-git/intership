document.getElementById('mc').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const main = document.querySelector('.main');
    const top = document.querySelector('.top');
    const button = document.getElementById('mc');
    

    main.classList.toggle('light-mode');
    top.classList.toggle('light-mode');
    button.classList.toggle('light-mode');
    

    
    if (document.body.classList.contains('light-mode')) {
        button.textContent = 'Dark Mode';
    } else {
        button.textContent = 'Light Mode';
    }
});
