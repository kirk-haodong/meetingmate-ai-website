// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
    }
});

// 数字动画
function animateNumber(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateNumber() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '%';
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target + '%';
        }
    }
    
    updateNumber();
}

// 滚动触发动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.textContent);
                animateNumber(entry.target, target);
            }
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// 观察统计数字
document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

// 功能卡片入场动画
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});

// 视频占位点击提示
document.querySelector('.video-placeholder')?.addEventListener('click', () => {
    alert('演示视频即将上线！');
});

// 终端打字效果
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

console.log('🦞 MeetingMate AI - 智能会议助手');
console.log('Powered by OpenClaw');
