
let changeThemeButtons = document.querySelectorAll('.changeTheme'); 

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { 
        let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
        applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `test/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
    applyTheme('light');
} else if (activeTheme === 'dark') {
    applyTheme('dark');
}


/* ANIMATION */

let option= {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback= function(entries, observer) {
  entries.forEach(entry =>{
     if (entry.isIntersecting){
        console.log('find', entry);
        entry.target.classList.add('active');
     }
  });
}
let observer = new IntersectionObserver(callback, option);

let target =  document.querySelectorAll('.anim')
target.forEach(target => {
    observer.observe(target);
});
