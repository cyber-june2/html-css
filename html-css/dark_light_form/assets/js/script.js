const mode_icon = document.getElementById('mode_icon');

mode_icon.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if(mode_icon.classList.contains('fa-moon')) {
        mode_icon.classList.remove('fa-moon');
        mode_icon.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode_icon.classList.add('fa-moon');
    mode_icon.classList.remove('fa-sun');
    form.classList.remove('dark');

});