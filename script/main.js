// 메뉴 반응형 토글

const toggleBtn = document.querySelector('.toggleBtn');
const menu =  document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

// 서브페이지 리스트 호버시

let links = document.querySelectorAll('.list_item');
let linksImages = document.querySelectorAll('.hover-reveal__img');

links.forEach((link, idx) => {
    link.addEventListener('mousemove', (e) => {
        link.children[1].style.opacity = 1;
        link.children[0].style.zIndex = 3;
        link.children[1].style.transform = `translate(${e.clientX - 200}px, -${e.clientY / 5}px) rotate(${e.clientX / 50}deg)`;
        linkImages[idx].style.transform = 'scale(1, 1)'
        link.style.zIndex = 2;
    })

    link.addEventListener('mouseleave', (e) => {
        link.children[1].style.opacity = 0;
        link.children[1].style.transform = `translate(${-e.clientX}px, -300px)`
        linkImages[idx].style.transform = 'scale(0.8, 0.8)';
        link.style.zIndex = 0;

    })
})