/* JavaScript */
// Get all accordion headers
var acc = document.getElementsByClassName("accordion-header");

for (var i = 0; i < acc.length; i++) {
    // When an accordion header is clicked
    acc[i].addEventListener("click", function() {
        // Remove active class from other headers and content
        var active = document.querySelector(".accordion .active");
        if (active && active != this) {
            active.classList.remove("active");
            var activeContent = active.nextElementSibling;
            activeContent.style.maxHeight = 0;
        }

        // Toggle active class
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle("active");
        if (content.style.maxHeight) {
            // If content is open, close it
            content.style.maxHeight = null;
        } else {
            // If content is closed, open it
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Get all main page links
var mainLinks = document.getElementsByClassName("main-link");

for (var i = 0; i < mainLinks.length; i++) {
    // When a main page link is clicked
    mainLinks[i].addEventListener("click", function(e) {
        e.preventDefault();

        // Remove active class from other headers and content
        var active = document.querySelector(".accordion .active");
        if (active) {
            active.classList.remove("active");
            var activeContent = active.nextElementSibling;
            activeContent.style.maxHeight = 0;
        }

        // Find the corresponding accordion header and trigger a click on it
        var targetId = this.getAttribute('href');
        var targetHeader = document.querySelector(targetId);
        if (targetHeader) {
            targetHeader.click();
        }
    });
}
