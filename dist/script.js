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
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

// Fn to shorten intro message for mobile devices
function updateIntroMessage() {
    
};

