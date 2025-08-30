const photos = [
    "photo/c.png",
    "photo/cpp.png",
    "photo/java.png",
    "photo/c-sharp.png",
    "photo/vscode.png",
    "photo/phyton.png",
    "photo/js.png"
];

let currentIndex = 0;

// Ekranın herhangi bir yerine tıklayınca fotoğraf göster
document.body.addEventListener("click", (event) => {
    const imgWidth = 140; // fotoğraf genişliği
    const imgHeight = 140; // tahmini yükseklik

    // Tıklanan nokta
    const x = event.clientX - imgWidth / 2;
    const y = event.clientY - imgHeight / 2;

    const img = document.createElement("img");
    img.src = photos[currentIndex];
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.width = imgWidth + "px";
    img.style.height = "auto";
    img.style.position = "absolute";

    document.body.appendChild(img);

    // 1 saniye sonra kaybolacak
    setTimeout(() => {
        img.remove();
    }, 1000);

    // Sıradaki fotoğraf
    currentIndex = (currentIndex + 1) % photos.length;
});

// Arka plan renkleri
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.background = "linear-gradient(-45deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb)";
document.body.style.backgroundSize = "400% 400%";

// Gradient animasyonu
let gradientStep = 0;
setInterval(() => {
    gradientStep = (gradientStep + 1) % 100;
    const percent = gradientStep;
    document.body.style.backgroundPosition = `${percent}% 50%`;
}, 150);

setInterval(() => {
    document.body.style.background = gradients[gradientIndex];
    gradientIndex = (gradientIndex + 1) % gradients.length;
}, 3000);

