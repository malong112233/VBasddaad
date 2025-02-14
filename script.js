// script.js
// 动态生成玫瑰花
function createRoses() {
    const roseGarden = document.getElementById('roseGarden');
    const roseCount = 10000; // 玫瑰花的数量

    for (let i = 0; i < roseCount; i++) {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.left = `${Math.random() * 100}%`; // 随机水平位置
        rose.style.top = `${Math.random() * 100}%`; // 随机垂直位置
        rose.style.animationDelay = `${Math.random() * 5}s`; // 随机动画延迟
        roseGarden.appendChild(rose);
    }
}

// 显示心形文字
function showMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.classList.add('visible');
}

// 初始化
createRoses();