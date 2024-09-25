function goToSection(sectionId) {
    // 隐藏所有 section
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // 显示指定的 section
    document.getElementById(sectionId).classList.remove('hidden');
}
