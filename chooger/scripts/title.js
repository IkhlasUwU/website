document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/c", "/ch", "/cho", "/choo", "/choog", "/chooge", "/chooger", "/chooger!"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
