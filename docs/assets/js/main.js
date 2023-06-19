function toggleAccordion(element) {
    var content;
    var header;
    
    // Check if a sub-header was clicked
    if (element.classList.contains('page')) {
        content = element.parentElement; // The parent div.menu-content
        header = content.previousElementSibling; // The preceding div.menu-header
    } else {
        content = element.nextElementSibling;
        header = element;
    }
    
    // Hide all menu contents
    var allMenuContents = document.querySelectorAll('#accordionMenu .menu-item .menu-content');
    allMenuContents.forEach(function(menuContent) {
        // Don't hide the clicked section or its parent section
        if (menuContent !== content) {
            menuContent.style.maxHeight = null;
            menuContent.previousElementSibling.classList.remove('active');
        }
    });
    
    // Show or hide the clicked menu content, unless a sub-header was clicked
    if (!element.classList.contains('page')) {
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            header.classList.remove('active');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            header.classList.add('active');
        }
    }
}
