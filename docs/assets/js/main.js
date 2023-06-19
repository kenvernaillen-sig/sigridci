function toggleAccordion(element) {
    var content = element.nextElementSibling;
    var header = element;
    
    // Check if a sub-header was clicked
    if (element.classList.contains('page')) {
        content = element.parentElement; // The parent div.menu-content
        header = content.previousElementSibling; // The preceding div.menu-header
    }
    
    // Hide all menu contents
    var allMenuContents = document.querySelectorAll('#accordionMenu .menu-item .menu-content');
    allMenuContents.forEach(function(menuContent) {
        // Don't hide the clicked section or its parent section
        if (menuContent !== content && menuContent.parentElement !== content.parentElement) {
            menuContent.style.maxHeight = null;
            menuContent.previousElementSibling.classList.remove('active');
        }
    });
    
    // Show or hide the clicked menu content
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        header.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        header.classList.add('active');
    }
}
