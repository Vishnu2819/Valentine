const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');
const header = document.querySelector('h1');

let scale = 1;
let messageIndex = 0;

const messages = [
    "message 1",
    "message 2",
    "message 3",
    "message 4",
    "message 5"
];

noBtn.addEventListener('mouseenter', () => {
    const rect = noBtn.getBoundingClientRect();

    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    scale = Math.min(scale + 0.15, 5);
    yesBtn.style.transform = `scale(${scale})`;
    
    messageIndex = (messageIndex + 1) % messages.length;
    header.innerHTML = messages[messageIndex];
});
