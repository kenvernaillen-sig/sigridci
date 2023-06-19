function toggleAccordion(header) {
    var content = header.nextElementSibling;

    // hide all menu contents
    var allMenuContents = document.querySelectorAll('#accordionMenu .menu-item .menu-content');
    allMenuContents.forEach(function(menuContent) {
        menuContent.style.maxHeight = null;
        menuContent.classList.remove('active');
    });

    // show or hide the clicked menu content
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        content.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('active');
    }
}
