function redirectToNewPage() {
    const newPageUrl = '/pages/home.html';
    setTimeout(() => {
        window.location.href = newPageUrl;
    }, 3000); 
}
redirectToNewPage();