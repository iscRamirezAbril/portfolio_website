// Function #1: Typing Effect //
function runTypingEffect() {
    // |-----| Variables |-----| //
    const text = 'I am Abril Ramirez.';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;
    // |-----| Variables |-----| //

    // |-----| Function call |-----| //
    typeText(text, typingElement, typingDelay);
    // |-----| Function call |-----| //
}

// Function #2: Typing Delay //
function typeText(text, typingElement, delay) {
    for(let i = 0; i < text.length; i++) {
        setTimeout(() => { 
            typingElement.textContent += text.charAt(i);
        }, delay * i);
    }
}

document.addEventListener("DOMContentLoaded", runTypingEffect());