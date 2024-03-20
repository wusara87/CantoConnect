<script>
    let currentQuestionIndex = 0;
    let quizData = [
        {
            question: 'Which word means \'apple\' in Cantonese?',
            options: ['蘋果', '香蕉', '西瓜', '橙'],
            correctAnswer: '蘋果'
        },
        {
            question: 'Which word means \'watermelon\' in Cantonese?',
            options: ['橙', '西瓜', '蘋果', '香蕉'],
            correctAnswer: '西瓜'
        },
        // Add more questions
    ];
    let selectedOption = '';
    let feedbackMessage = '';

    function nextQuestion() {
        if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
            feedbackMessage = 'Correct!';
        } else {
            feedbackMessage = 'Incorrect. The correct answer is ' + quizData[currentQuestionIndex].correctAnswer;
        }

        // Move to the next question
        currentQuestionIndex++;
        selectedOption = ''; // Reset selected option
    }
</script>

{#if currentQuestionIndex < quizData.length}
    <h1>Vocabulary Mini-Game</h1>
    <p>{quizData[currentQuestionIndex].question}</p>
    {#each quizData[currentQuestionIndex].options as option}
        <input type="radio" bind:group={selectedOption} value={option} id={option} />
        <label for={option}>{option}</label><br>
    {/each}
    <button on:click={nextQuestion}>Next Question</button>
    <p>{feedbackMessage}</p>
{:else}
    <h1>Quiz Completed</h1>
    <p>Congratulations, you have completed the quiz!</p>
{/if}