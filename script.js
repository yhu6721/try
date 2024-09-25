document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("customization").classList.remove("hidden");
});

document.querySelectorAll(".next-btn").forEach(button => {
    button.addEventListener("click", function() {
        const nextSection = document.getElementById(button.getAttribute("data-next"));
        button.parentElement.classList.add("hidden");
        nextSection.classList.remove("hidden");
    });
});

document.querySelectorAll(".prev-btn").forEach(button => {
    button.addEventListener("click", function() {
        const prevSection = document.getElementById(button.getAttribute("data-prev"));
        button.parentElement.classList.add("hidden");
        prevSection.classList.remove("hidden");
    });
});

document.getElementById("generateBtn").addEventListener("click", function() {
    document.getElementById("customization").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
});

document.getElementById("shareBtn").addEventListener("click", function() {
    alert("分享功能待实现！");
});
