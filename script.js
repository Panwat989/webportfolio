const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-btn").forEach(link => {
    if (link.getAttribute("href") === current) {
        link.classList.add("active");
    }
});

document.querySelectorAll(".cer").forEach((cer, i) => {
    const imgs = cer.querySelectorAll("img");
    if (imgs.length === 0) return;
    const id = "slide" + i;
    const multi = imgs.length > 1;
    let items = "";
    let dots = "";
    imgs.forEach((img, n) => {
        const active = n === 0 ? "active" : "";
        items += `
            <div class="carousel-item ${active}">
                <img src="${img.getAttribute("src")}" alt="${img.alt}" class="d-block mx-auto slide-img">
            </div>`;
        dots += `<button type="button" data-bs-target="#${id}" data-bs-slide-to="${n}" class="${active}" aria-label="สไลด์ ${n + 1}"></button>`;
    });

    const controls = multi ? `
        <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">ก่อนหน้า</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">ถัดไป</span>
        </button>
        <div class="carousel-indicators">${dots}</div>` : "";

    cer.outerHTML = `
        <div id="${id}" class="carousel slide">
            <div class="carousel-inner">${items}</div>
            ${controls}
        </div>`;
});

const imgModalEl = document.getElementById("imgModal");
if (imgModalEl) {
    const imgModal = new bootstrap.Modal(imgModalEl);
    const modalImg = document.getElementById("imgModalSrc");

    document.querySelectorAll(".slide-img").forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            imgModal.show();
        });
    });
}