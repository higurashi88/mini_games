const player = document.getElementById('player');
let x = 0;
let y = 0;

// マウス座標を取得
window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    player.style.transform = `translate(${x}px, ${y}px)`;
});

