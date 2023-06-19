function toggleAccordion(element) {
    var item = element.parentNode;

    var items = Array.from(document.querySelectorAll('.menu-item'));
    items.forEach(function(i) {
        if (item !== i) {
            i.classList.remove('active');
            i.querySelector('.menu-content').style.maxHeight = null;
        }
    });

    if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.querySelector('.menu-content').style.maxHeight = null;
    } else {
        item.classList.add('active');
        item.querySelector('.menu-content').style.maxHeight = item.querySelector('.menu-content').scrollHeight + "px";
    }
}

// Bind the function to both header and page clicks
document.querySelectorAll('.menu-header, .page').forEach(function(element) {
    element.addEventListener('click', function() { toggleAccordion(element); });
});
