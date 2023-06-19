function toggleAccordion(element) {
    var items = Array.from(document.querySelectorAll('.menu-item'));
    var item = element.parentNode;
    items.forEach(function(i) {
        if (item !== i) {
            i.classList.remove('active');
            i.querySelector('.menu-content').style.maxHeight = null;
        }
    });

    if (item.classList.contains('active')) {
        item.querySelector('.menu-content').style.maxHeight = null;
        item.classList.remove('active');
    } else {
        item.classList.add('active');
        item.querySelector('.menu-content').style.maxHeight = item.querySelector('.menu-content').scrollHeight + "px";
    }
}

function highlightPage(element) {
    var items = Array.from(document.querySelectorAll('.menu-item'));
    var item = element.parentNode.parentNode; // item is the grandparent
    items.forEach(function(i) {
        if (item !== i) { // collapse all other sections
            i.classList.remove('active');
            i.querySelector('.menu-content').style.maxHeight = null;
        }
    });

    if (!item.classList.contains('active')) { // if the parent section is not active, make it active
        item.classList.add('active');
        item.querySelector('.menu-content').style.maxHeight = item.querySelector('.menu-content').scrollHeight + "px";
    }
}

// Bind the function to both header and page clicks
document.querySelectorAll('.menu-header').forEach(function(element) {
    element.addEventListener('click', function() { toggleAccordion(element); });
});

document.querySelectorAll('.page').forEach(function(element) {
    element.addEventListener('click', function() { highlightPage(element); });
});
