// Fn to shorten intro message for mobile devices
function updateIntroMessage() {
    let introMessage = document.querySelector('.intro-message');
    let h1Element = introMessage.querySelector('h1');
    let h2Elements = introMessage.querySelectorAll('h2');
    var nav = introMessage.querySelector('.transparent-overlay');
    var flexContainer = introMessage.querySelector('.flex.center.column');
    var screenWidth = window.innerWidth;

    if (screenWidth <= 998) {
        //Shorten intro message 
        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.textContent = 'Ben Wellington';
            } else if (h2.textContent.includes('full-stack developer')) {
                h2.textContent = 'Full-Stack Developer';
            }
        });
        flexContainer.insertBefore(nav, flexContainer.firstChild);
    } else {
        // Revert changes made for mobile
        h2Elements.forEach(function(h2) {
            if (h2.textContent.includes('Ben Wellington')) {
                h2.innerHTML = 'My name is <span class="apricot">Ben Wellington,</span>';
            } else if (h2.textContent.includes('Full-Stack Developer')) {
                h2.innerHTML = 'and I am a <span class="apricot">full-stack developer.</span>';
            }
        });
        flexContainer.insertBefore(nav, flexContainer.lastChild);
    }
}

// Fn to update styling properites of current project div upon mouse event
function updateProject(event) {
    // Update h3 color to apricot
    const h3Element = event.currentTarget.querySelector('h3');
    h3Element.style.color = '#FABD6B';
    // Update opacity of img
    const imgElement = event.currentTarget.querySelector('img');
    imgElement.style.opacity = 0.4;
        // Event listener to remove styling properties once mouse leaves
        event.currentTarget.addEventListener('mouseleave', function () {
            h3Element.style.color = '#FFF';
            imgElement.style.opacity = 0.25;
        });
}

window.addEventListener('load', updateIntroMessage);
window.addEventListener('resize', updateIntroMessage);