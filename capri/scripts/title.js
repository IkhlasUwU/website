document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/c", "/ca", "/cap", "/capr", "/capri", "/capr", "/cap", "/ca", "/c", "/"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
