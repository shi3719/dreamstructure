const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

// 공통파일 불러오기
const loadSections = () => {
    fetch('/assets/temp/header.html')
        .then(response => response.ok ? response.text() : Promise.reject('Header not found'))
        .then(data => { header.innerHTML = data; })
        .catch(error => console.error('Header load error:', error));

    fetch('/assets/temp/footer.html')
        .then(response => response.ok ? response.text() : Promise.reject('Footer not found'))
        .then(data => { footer.innerHTML = data; })
        .catch(error => console.error('Footer load error:', error));
};

loadSections();