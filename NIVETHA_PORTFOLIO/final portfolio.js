document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form Submitted Successfully!');
});


// Social Icon Hover Animation
const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach(icon => {
    icon.addEventListener("mouseover", function() {
        icon.classList.add("social-icon-hover");
    });
    icon.addEventListener("mouseout", function() {
        icon.classList.remove("social-icon-hover");
    });
});

// Scroll Animation for About Section
const aboutSection = document.getElementById("about");
window.addEventListener("scroll", function() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionTop < screenPosition) {
        aboutSection.classList.add("scroll-active");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const educationItems = document.querySelectorAll(".education-item");

    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function handleScrollAnimation() {
        educationItems.forEach(item => {
            if (isElementInView(item)) {
                item.classList.add("in-view");
            }
        });
    }

    // Trigger scroll animation
    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Run on load in case section is already in view
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            const projectCard = e.target.closest(".project");
            projectCard.classList.toggle("flipped");
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById("skills");
    const skillBars = document.querySelectorAll(".progress");
    const skillCounters = [];

    // Add counters for each skill level
    skillBars.forEach(skillBar => {
        const counter = document.createElement("span");
        counter.classList.add("counter");
        skillBar.parentNode.appendChild(counter);
        skillCounters.push(counter);
    });

    function animateSkills() {
        skillBars.forEach((bar, index) => {
            const skillLevel = bar.getAttribute("data-skill-level");
            bar.style.width = skillLevel + "%";
            animateCounter(skillCounters[index], skillLevel);
        });
    }

    function animateCounter(counter, skillLevel) {
        let count = 0;
        const updateCounter = setInterval(() => {
            if (count < skillLevel) {
                counter.textContent = `${count}%`;
                count++;
            } else {
                counter.textContent = `${skillLevel}%`;
                clearInterval(updateCounter);
            }
        }, 15);
    }

    // Detect when the Skills section is in view
    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Trigger the animation when the section is in view
    window.addEventListener("scroll", () => {
        if (isElementInView(skillsSection)) {
            animateSkills();
        }
    });
})