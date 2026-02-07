const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

let scale = 1;

noBtn.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth ;
    const maxY = window.innerHeight - noBtn.offsetHeight ;

    const x = Math.random() * maxX ;
    const y = Math.random() * maxY ;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    scale = Math.min(scale + 0.15, 5);
    yesBtn.style.transform = `scale(${scale})`;
});
