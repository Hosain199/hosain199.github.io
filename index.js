/**
 * Animates the browser tab title by typing out and then erasing a phrase,
 * and repeats the process indefinitely.
 */
function loopTitleTyping(phrase, typeSpeed = 150, eraseSpeed = 50, delay = 1000) {
    let index = 0;
    const phraseLength = phrase.length;
    
    // --- Phase 1: Typing ---
    const typingInterval = setInterval(() => {
        if (index <= phraseLength) {
            // Set the title to a progressively longer substring
            document.title = phrase.substring(0, index);
            index++;
        } else {
            // Typing is complete, stop this interval and start the next phase
            clearInterval(typingInterval);
            
            // --- Delay before Erasing ---
            setTimeout(() => {
                // --- Phase 2: Erasing ---
                const erasingInterval = setInterval(() => {
                    if (index >= 0) {
                        // Set the title to a progressively shorter substring
                        document.title = phrase.substring(0, index);
                        index--;
                    } else {
                        // Erasing is complete, stop this interval
                        clearInterval(erasingInterval);
                        
                        // --- Phase 3: Loop/Repeat ---
                        // Call the function again to start the loop
                        loopTitleTyping(phrase, typeSpeed, eraseSpeed, delay);
                    }
                }, eraseSpeed);
            }, delay); // Wait 'delay' milliseconds before starting erase
        }
    }, typeSpeed);
}

// Call the function on page load to start the infinite loop
document.addEventListener('DOMContentLoaded', function() {
    // Start the looping effect with your desired phrase
    loopTitleTyping("Hosain Mahmud's Portfolio");
    
    // ... (Your existing Typed.js code for the main heading goes here) ...
});

function toggleMenu() {
    const menu = document.querySelector('.menuLinks');
    const icon = document.querySelector('.hamburgerIcon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// This code finds the element with the ID 'typed-output'
// and tells the Typed.js library what to type.

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        // The strings you want to type out. 
        // You can have multiple phrases that it cycles through!
        strings: [
            "Hello, I'm",
            "Hosain Mahmud",
            "Welcome to my portfolio."
        ],
        typeSpeed: 60,       // Speed of typing in milliseconds
        backSpeed: 30,       // Speed of deleting in milliseconds
        startDelay: 500,     // Delay before starting (in milliseconds)
        loop: true,          // Loop the typing animation indefinitely
        showCursor: true,    // Show the blinking cursor
        cursorChar: '|',     // The character for the cursor
    };

    // Initialize Typed.js on the element with the ID 'typed-output'
    var typed = new Typed('#typedOutput', options);
});



