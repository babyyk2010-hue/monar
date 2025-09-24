document.getElementById('holland-quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بالطريقة الافتراضية

    // جمع الإجابات وحساب النقاط لكل نوع
    let scores = {
        realistic: 0,
        investigative: 0,
        artistic: 0,
        social: 0,
        enterprising: 0,
        conventional: 0
    };

    const formElements = event.target.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type === 'checkbox' && element.checked) {
            const type = element.name;
            scores[type]++;
        }
    }

    // إيجاد أعلى 3 أنواع في النقاط
    let sortedScores = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    let top3 = sortedScores.slice(0, 3);
    
    // ربط الرموز بالأسماء الكاملة
    const titles = {
        realistic: 'الواقعي',
        investigative: 'البحثي',
        artistic: 'الفني',
        social: 'الاجتماعي',
        enterprising: 'المبادر',
        conventional: 'التقليدي'
    };

    // عرض النتيجة
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.innerHTML = `
        <h2>نتائج الاستبيان:</h2>
        <p>أبرز سمات شخصيتك هي:</p>
        <p>1. ${titles[top3[0]]} (${scores[top3[0]]} نقطة)</p>
        <p>2. ${titles[top3[1]]} (${scores[top3[1]]} نقطة)</p>
        <p>3. ${titles[top3[2]]} (${scores[top3[2]]} نقطة)</p>
    `;
    resultsDiv.style.display = 'block'; // إظهار النتائج
});