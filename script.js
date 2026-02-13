const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');
const header = document.querySelector('h1');

let scale = 1;
let messageIndex = 0;

const messages = [
    "But Why?",
    "Please!!",
    "I said Please!!",
    "Enough!!",
    "You will be my Valentine!!"
];

yesBtn.addEventListener('click', () => {
    window.location.href = 'congratulations.html';
});

noBtn.addEventListener('mouseenter', () => {
    // Convert to fixed positioning on first hover
    if (noBtn.style.position !== 'fixed') {
        const rect = noBtn.getBoundingClientRect();
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${rect.left}px`;
        noBtn.style.top = `${rect.top}px`;
    }

    const rect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    scale = Math.min(scale + 0.15, 4);
    yesBtn.style.transform = `scale(${scale})`;
    header.style.transform = `scale(${scale})`;
    
    if(messageIndex < messages.length - 1){
        messageIndex = messageIndex + 1;
    }
    header.innerHTML = messages[messageIndex];
});
