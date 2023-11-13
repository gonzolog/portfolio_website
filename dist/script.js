// Fn to shorten intro message for mobile devices
function updateIntroMessage() {
    let introMessage = document.querySelector('.intro-message');
    let h1Element = introMessage.querySelector('h1');
    let h2Elements = introMessage.querySelectorAll('h2');
    var nav = introMessage.querySelector('.transparent-overlay');
    var flexContainer = introMessage.querySelector('.flex.center.column');
    var screenWidth = window.innerWidth;

    if (screenWidth <= 538) {
        //Shorten intro message 
        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.textContent = 'Ben Wellington';
            } else if (h2.textContent.includes('full-stack developer')) {
                h2.textContent = 'Full-Stack Developer';
            }
        });
    } else {
        // Revert changes made for mobile
        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.innerHTML = 'My name is <span class="apricot">Ben Wellington,</span>';
            } else if (h2.textContent.includes('Full-Stack Developer')) {
                h2.innerHTML = 'and I am a <span class="apricot">full-stack developer.</span>';
            }
        });
    }
    if (screenWidth <= 1024) {
        // Repostions nav bar to be ontop of the intro message
        flexContainer.insertBefore(nav, flexContainer.firstChild);
    } else {
        flexContainer.insertBefore(nav, flexContainer.lastChild);
    }
}
window.addEventListener('load', updateIntroMessage);
window.addEventListener('resize', updateIntroMessage);