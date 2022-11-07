const body = document.querySelector('body');
const container = document.querySelector('.container');

function createHeart() {
    const heart = document.createElement('div');
    heart.appendChild(document.createElement('div'))
    heart.className = 'heart';
    
    const size = Math.random() * 10 + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    const rotate = Math.random() * 360
    heart.style.transform = `rotate(${rotate}deg) translate(50%, 50%)`;
    heart.style.setProperty('--inner-rotate', -rotate + 'deg');
    heart.style.setProperty('--rotate', rotate + 'deg');
    if (rotate > 180 && rotate < 240 || rotate > 300 && rotate < 360) {
        heart.style.setProperty('animation', 'moveFast 4s linear infinite');
    } else {
        heart.style.setProperty('animation', 'moveSlow 2s linear infinite')
    }


    container.appendChild(heart);
    // setTimeout(() => {
    //     heart.remove()
    // }, 4000);
}


const id = setInterval(() => {
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
}, 100)
setTimeout(() => clearInterval(id), 10000)