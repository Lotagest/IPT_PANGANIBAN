
document.querySelector('.search-button').addEventListener('click', function () {
    const searchInput = document.querySelector('.search-container input').value;
    if (searchInput.trim() !== "") {
        alert(`Searching for: ${searchInput}`);
    } else {
        alert('Please enter a search term.');
    }
});


document.querySelectorAll('.navbar button').forEach(button => {
    button.addEventListener('click', function () {
        alert(`Navigating to ${this.innerText} page.`);
    });
});

const bgVideo = document.getElementById('bgVideo');

bgVideo.addEventListener('click', function () {
    if (bgVideo.paused) {
        bgVideo.play();
    } else {
        bgVideo.pause();
    }
});
