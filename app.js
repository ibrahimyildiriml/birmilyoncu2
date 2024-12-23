
// Canlı Ziyaretçi Sayacı ve yüzde hesaplama
document.addEventListener("DOMContentLoaded", () => {
    const totalVisitors = 1000000; // 1 milyon
    fetch("http://localhost:3000/visitor")
        .then(response => response.json())
        .then(data => {
            const currentVisitor = data.currentVisitor;
            document.getElementById("counter").textContent = currentVisitor;
            const percentage = Math.min((currentVisitor / totalVisitors) * 100, 100).toFixed(2);
            document.getElementById("percentage").textContent = `%${percentage}`;
        })
        .catch(error => {
            console.error("Sayaç yüklenemedi:", error);
        });
});
    