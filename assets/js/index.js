const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

// 공통파일 불러오기
const loadSections = () => {
    fetch('/assets/temp/header.html')
        .then(response => response.ok ? response.text() : Promise.reject('Header not found'))
        .then(data => {
            header.innerHTML = data;
            afterHeaderLoad();
        })
        .catch(error => console.error('Header load error:', error));

    fetch('/assets/temp/footer.html')
        .then(response => response.ok ? response.text() : Promise.reject('Footer not found'))
        .then(data => {
            footer.innerHTML = data;
        })
        .catch(error => console.error('Footer load error:', error));
};

loadSections();

// header 불러온 이후
const afterHeaderLoad = () => {
    // 햄버거 메뉴 조절
    const mobileMenuOpenBtn = document.querySelector('.mobile_menu_open');
    const mobileMenuPopup = document.querySelector('.mobile_menu_popup');

    mobileMenuOpenBtn.addEventListener('click', () => {
        mobileMenuOpenBtn.classList.toggle('active');
        mobileMenuPopup.classList.toggle('on');
    })

    // 모바일 메뉴 오픈 
    const subMenuBtns = document.querySelectorAll('.sub_menu_btn');
    subMenuBtns.forEach(subMenuBtn => {
        subMenuBtn.addEventListener('click', () => {
            subMenuBtn.parentNode.parentNode.classList.toggle('on');
            subMenuBtn.parentNode.parentNode.classList.toggle('off');
        })
    })
}