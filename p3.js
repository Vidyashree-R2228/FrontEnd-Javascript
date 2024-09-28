let currentIndex = 0;
const categories = document.querySelectorAll('.category');

function moveSlider(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = categories.length - 1;
    } else if (currentIndex >= categories.length) {
        currentIndex = 0;
    }
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
    categories[currentIndex].style.display = 'block';
}

// Initialize slider
for (let i = 0; i < categories.length; i++) {
    categories[i].style.display = 'none';
}
categories[0].style.display = 'block';






