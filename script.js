const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-btn").forEach(link => {
    if (link.getAttribute("href") === current) {
        link.classList.add("active");
    }
});