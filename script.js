// 页面加载时，检查URL的hash并显示相应的内容
window.addEventListener("load", function() {
    handleHashChange();
});

// 当hash值变化时，切换页面
window.addEventListener("hashchange", function() {
    handleHashChange();
});

function handleHashChange() {
    const hash = window.location.hash || "#home";
    // 隐藏所有的section
    document.querySelectorAll(".section, .question").forEach(section => {
        section.classList.add("hidden");
    });

    // 根据hash显示相应的section
    if (hash === "#home") {
        document.getElementById("home").classList.remove("hidden");
    } else if (hash === "#question1" || hash === "#question2" || hash === "#question3" || hash === "#question4") {
        document.getElementById("customization").classList.remove("hidden");
        document.querySelector(hash).classList.remove("hidden");
    } else if (hash === "#result") {
        document.getElementById("result").classList.remove("hidden");
    }
}

// “开始定制”按钮点击时，跳转到第一个问题
document.getElementById("startBtn").addEventListener("click", function() {
    window.location.hash = "#question1";
});

// “下一步”和“上一步”按钮的事件监听
document.querySelectorAll(".next-btn").forEach(button => {
    button.addEventListener("click", function() {
        const nextSection = button.getAttribute("data-next");
        window.location.hash = nextSection;
    });
});

document.querySelectorAll(".prev-btn").forEach(button => {
    button.addEventListener("click", function() {
        const prevSection = button.getAttribute("data-prev");
        window.location.hash = prevSection;
    });
});

// 生成推荐配方按钮
document.getElementById("generateBtn").addEventListener("click", function() {
    window.location.hash = "#result";
});

// 分享按钮
document.getElementById("shareBtn").addEventListener("click", function() {
    alert("分享功能待实现！");
});
