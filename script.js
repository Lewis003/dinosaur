const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const bgs = document.querySelectorAll('.bg');

let index = 0;

function updateBackground(index) {
    bgs.forEach((bg, idx) => {
        bg.classList.toggle('active', idx === index);
    });
}

nextBtn.addEventListener('click', () => {
    if (index < 3) {
        index++;
        listInfo.style.transform = `translateY(${index * -25}%)`;
        listImg.style.transform = `translateY(${index * -100}%)`;
        updateBackground(index);
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        listInfo.style.transform = `translateY(${index * -25}%)`;
        listImg.style.transform = `translateY(${index * -100}%)`;
        updateBackground(index);
    }
});

// Initialize the first background as active
updateBackground(index);
