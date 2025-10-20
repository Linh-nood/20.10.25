// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ffffff', '#ffd700', '#ff69b4', '#87ceeb']
        },
        shape: {
            type: ['circle', 'edge', 'triangle'],
            stroke: {
                width: 0,
                color: '#000000'
            },
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.8
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Music Toggle Functionality
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.textContent = '🎵';
    } else {
        bgMusic.play().catch(e => {
            console.log('Audio playback failed:', e);
            alert('Vui lòng thêm file nhạc "music.mp3" vào thư mục để phát nhạc nền! 🎵');
        });
        musicToggle.classList.add('playing');
        musicToggle.textContent = '🎶';
    }
    isPlaying = !isPlaying;
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.card, .promise-card, .photo-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Create falling rose petals
function createRosePetal() {
    const petal = document.createElement('div');
    petal.innerHTML = '🌹';
    petal.style.position = 'fixed';
    petal.style.fontSize = Math.random() * 20 + 15 + 'px';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = '-50px';
    petal.style.opacity = Math.random() * 0.5 + 0.3;
    petal.style.pointerEvents = 'none';
    petal.style.zIndex = '3';
    petal.style.transition = 'transform 0.1s linear';
    
    document.body.appendChild(petal);
    
    let rotation = 0;
    let posY = -50;
    let posX = parseFloat(petal.style.left);
    let swing = Math.random() * 2 - 1;
    
    const animate = () => {
        posY += 1;
        posX += swing * 0.5;
        rotation += 2;
        
        petal.style.top = posY + 'px';
        petal.style.left = posX + '%';
        petal.style.transform = `rotate(${rotation}deg)`;
        
        if (posY < window.innerHeight + 50) {
            requestAnimationFrame(animate);
        } else {
            petal.remove();
        }
    };
    
    animate();
}

// Create petals periodically
setInterval(createRosePetal, 2000);

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1.5) rotate(180deg);
        }
    }
`;
document.head.appendChild(style);

// Welcome message
window.addEventListener('load', () => {
    setTimeout(() => {
        console.log('%c💝 Chúc Mừng 20/10! 💝', 'font-size: 24px; color: #ff69b4; font-weight: bold;');
        console.log('%c✝️ Chúa Yêu Thương Em! ✝️', 'font-size: 18px; color: #87ceeb;');
    }, 1000);
});

// Add click effect on promise cards
document.querySelectorAll('.promise-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'cardPop 0.6s ease';
        }, 10);
    });
});

// Add card pop animation
const cardPopStyle = document.createElement('style');
cardPopStyle.textContent = `
    @keyframes cardPop {
        0% { transform: scale(1); }
        50% { transform: scale(1.05) rotate(2deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
`;
document.head.appendChild(cardPopStyle);

// Blessing on scroll to bottom
let blessingShown = false;
window.addEventListener('scroll', () => {
    if (!blessingShown && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        blessingShown = true;
        const blessing = document.querySelector('.blessing');
        blessing.style.animation = 'blessingGlow 2s ease infinite';
    }
});

// Add blessing glow animation
const blessingStyle = document.createElement('style');
blessingStyle.textContent = `
    @keyframes blessingGlow {
        0%, 100% {
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        50% {
            box-shadow: 0 20px 60px rgba(255, 215, 0, 0.4),
                        0 0 40px rgba(255, 255, 255, 0.6);
        }
    }
`;
document.head.appendChild(blessingStyle);