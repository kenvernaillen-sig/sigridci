function toggleAccordion(element) {
    var content = element.nextElementSibling;
    var header = element;
    
    if (element.classList.contains('page')) { // if a sub-header was clicked
        content = element.parentElement; // the parent div.menu-content
        header = content.previousElementSibling; // the preceding div.menu-header
    }
    
    // hide all menu contents
    var allMenuContents = document.querySelectorAll('#accordionMenu .menu-item .menu-content');
    allMenuContents.forEach(function(menuContent) {
        if (menuContent !== content) { // Don't hide the clicked section
            menuContent.style.maxHeight = null;
            menuContent.parentElement.classList.remove('active');
        }
    });
    
    // show or hide the clicked menu content
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        header.parentElement.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        header.parentElement.classList.add('active');
    }
}
