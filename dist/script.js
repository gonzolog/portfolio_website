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
    let h1Element = introMessage.querySelector('h1');
    let h2Elements = introMessage.querySelectorAll('h2');
    var nav = introMessage.querySelector('.transparent-overlay');
    var flexContainer = introMessage.querySelector('.flex.center.column');

    if (deviceType === 'mobile') {
        //Remove h1 element '<Hello!/>'
        if (h1Element) {
            h1Element.hidden = true
        }
        //Shorten intro message 
        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.textContent = 'Ben Wellington';
            } else if (h2.textContent.includes('full-stack developer')) {
                h2.textContent = 'Full-Stack Developer';
            }
        });
        // Repostions nav bar to be ontop of the intro message
        flexContainer.insertBefore(nav, flexContainer.firstChild);

        // Re align social media icons with intro message
        document.querySelector('.social-media-icons').classList.add('column');
    } else {
        // Revert changes made for mobile
        if (h1Element) {
            h1Element.hidden = false;
        }

        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.innerHTML = 'My name is <span class="apricot">Ben Wellington,</span>';
            } else if (h2.textContent.includes('Full-Stack Developer')) {
                h2.innerHTML = 'and I am a <span class="apricot">full-stack developer.</span>';
            }
        });


    }
}

var flexContainer = document.querySelector('.flex.center.column');
var socialMediaIcons = document.querySelector('.social-media-icons')
var introContainer = document.querySelector('.intro-container');
var innerContainer = document.querySelector('.inner-container')
var outerContainer = document.querySelector('.outer-container')
var mainContainer = document.querySelector('.main-container');
var nav = document.querySelector('.transparent-overlay');
var introMessage = document.querySelector('.intro-message');
var destination = document.querySelector('.destination')
introMessage.insertBefore(socialMediaIcons, introMessage.firstChild);

window.addEventListener('load', updateIntroMessage);
window.addEventListener('resize', updateIntroMessage);
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);