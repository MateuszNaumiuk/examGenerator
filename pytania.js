// BAZA PYTAŃ - Tutaj wprowadzasz swoje dane do nauki
const questions = [
    {
        question: "Czy protokół HTTPS szyfruje ruch domyślnie na porcie 443?",
        correctAnswer: true
    },
    {
        question: "Czy Docker i Kubernetes to dokładnie to samo narzędzie służące do tego samego celu?",
        correctAnswer: false
    },
    {
        question: "Czy polecenie 'git merge' służy do usuwania lokalnego repozytorium?",
        correctAnswer: false
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const quizContainer = document.getElementById('quiz');
const feedbackElement = document.getElementById('feedback-message');
const buttons = document.querySelectorAll('#answer-buttons button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Następne pytanie';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
}

function resetState() {
    nextButton.style.display = 'none';
    feedbackElement.innerText = '';
    feedbackElement.style.color = '#333';
    buttons.forEach(button => {
        button.disabled = false;
        button.style.opacity = '1';
    });
}

function selectAnswer(userChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Zablokuj przyciski po kliknięciu
    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = '0.5';
    });

    if (userChoice === null) {
        // Opcja: NIE WIEM
        feedbackElement.innerText = "Pominięto.";
        feedbackElement.style.color = "#6c757d";
    } else if (userChoice === currentQuestion.correctAnswer) {
        // Poprawna odpowiedź
        score += 1;
        feedbackElement.innerText = "Dobrze!";
        feedbackElement.style.color = "#28a745";
    } else {
        // Błędna odpowiedź
        score -= 1;
        feedbackElement.innerText = `Źle! Prawidłowa odpowiedź to: ${currentQuestion.correctAnswer ? 'TAK' : 'NIE'}`;
        feedbackElement.style.color = "#dc3545";
    }

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    
    // Określenie koloru końcowego wyniku (czerwony dla ujemnych, zielony dla dodatnich)
    let scoreColor = score >= 0 ? '#28a745' : '#dc3545';
    
    scoreContainer.innerHTML = `
        Maksymalna liczba punktów do zdobycia: ${questions.length}<br>
        Twój końcowy wynik: <span style="color: ${scoreColor}; font-size: 32px;">${score}</span> pkt<br><br>
        <button onclick="location.reload()" class="btn btn-yes" style="text-align:center;">Spróbuj ponownie</button>
    `;
}

startQuiz();