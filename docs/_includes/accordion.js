// Get all main page links
var mainLinks = document.getElementsByClassName("main-link");

for (var i = 0; i < mainLinks.length; i++) {
    // When a main page link is clicked
    mainLinks[i].addEventListener("click", function(e) {
        e.preventDefault();

        // Remove active class from other headers and content
        var active = document.querySelector(".toc .active");
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
