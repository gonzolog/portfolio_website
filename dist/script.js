// Function that checks screen width
// Categorise into (mobile, tablet, etc)
function checkScreenWidth() {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 320 && screenWidth <= 480) {
        return 'mobile';
    } else if (screenWidth >= 481 && screenWidth <= 768) {
        return 'tablet';
    } else if (screenWidth >= 769 && screenWidth <= 1024) {
        return 'laptop';
    } else if (screenWidth >= 1025 && screenWidth <= 1200) {
        return 'desktop';
    } else if (screenWidth >= 1201) {
        return 'desktop-large';
    }
};
// Fn to shorten intro message for mobile devices
function updateIntroMessage() {
    let introMessage = document.querySelector('.intro-message');
    let deviceType = checkScreenWidth();

    if (deviceType === 'mobile') {
        //Remove h1 element '<Hello!/>'
        let h1Element = introMessage.querySelector('h1');
        if (h1Element) {
            h1Element.hidden = true
        }

        //Shorten intro message 
        let h2Elements = introMessage.querySelectorAll('h2');
        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.textContent = 'Ben Wellington';
            } else if (h2.textContent.includes('full-stack developer')) {
                h2.textContent = 'Full-Stack Developer';
            }
        });
    } else {
        // Revert changes made for mobile
        let h1Element = introMessage.querySelector('h1');
        if (h1Element) {
            h1Element.hidden = false;
        }

        let h2Elements = introMessage.querySelectorAll('h2');
        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.innerHTML = 'My name is <span class="apricot">Ben Wellington,</span>';
            } else if (h2.textContent.includes('Full-Stack Developer')) {
                h2.innerHTML = 'and I am a <span class="apricot">full-stack developer.</span>';
            }
        });
    }
}

function moveNavBarAboveIntroMessage() {
    let mainContainer = document.querySelector('.main-container');
    let navBar = document.querySelector('.transparent-overlay');
    let introContainer = document.querySelector('.intro-container');
    let deviceType = checkScreenWidth();

    if (deviceType === 'mobile') {
        // Move the nav bar above the intro message
        mainContainer.insertBefore(navBar, introContainer);
    } else {
        // If not 'mobile', revert to the original order
        mainContainer.insertBefore(introContainer, navBar);
    }
}

window.addEventListener('load', updateIntroMessage);
window.addEventListener('resize', updateIntroMessage);
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
window.addEventListener('load', moveNavBarAboveIntroMessage);
window.addEventListener('resize', moveNavBarAboveIntroMessage);