var changedTitle = localStorage.getItem(location.href);
if (changedTitle) {
    document.title = changedTitle;
} else {
    document.title = document.title;
}