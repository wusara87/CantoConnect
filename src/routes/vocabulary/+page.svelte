<script>
    export let data; 

    let currentQuestionIndex = 0;
    let quizData = data.reformattedQuestions;
    let selectedOption = '';
    let feedbackMessage = '';
    let showFeedback = false;
    let correct = 0;
    let totalQuestions = quizData.length;
    let showQuizCompleted = false;

    function submitAnswer() {
        if(!selectedOption) {
            alert("Please select an option.");
            return;
        }
        const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
        if (correctAnswer.includes(selectedOption)) {
            feedbackMessage = 'Correct!';
            correct++;
        } else {
            feedbackMessage = 'Incorrect. The correct answer is ' + quizData[currentQuestionIndex].correctAnswer;
        }
        showFeedback = true;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        selectedOption = '';
        feedbackMessage = '';
        showFeedback = false;

        if (currentQuestionIndex == quizData.length) {
            showQuizCompleted = true;
        }
    }

    function tryAgain() {
        currentQuestionIndex = 0;
        correct = 0;
        selectedOption = '';
        feedbackMessage = '';
        showFeedback = false;
        showQuizCompleted = false;
    }
</script>

<main class="container">
    <a href="/homepage"><button class="button" id="homeBtn">Back To Home</button></a>
    <h1>Vocabulary Mini-Game</h1>

    {#if currentQuestionIndex < quizData.length}
        <p>{quizData[currentQuestionIndex].question}</p>
        {#each quizData[currentQuestionIndex].options as option}
            <input type="radio" bind:group={selectedOption} value={option} id={option} />
            <label for={option}>{option}</label><br>
        {/each}
        {#if !showFeedback}
            <button on:click={submitAnswer}>Submit</button>
        {/if}
        {#if showFeedback && currentQuestionIndex < quizData.length - 1}
            <p>{feedbackMessage}</p>
            <button on:click={nextQuestion}>Next Question</button>
        {:else if showFeedback}
            <p>{feedbackMessage}</p>
            <button on:click={() => currentQuestionIndex = quizData.length}>Done</button>
        {/if}
    {:else}
        <p>Congratulations, you have completed the quiz!</p>
        <p>Score: {correct}/{totalQuestions}</p>
        <button on:click={tryAgain}>Try Again</button>
    {/if}
</main>

<style>
    .container {
        text-align: center;
        width: 500px;
        height: 800px;
        border: 2px solid;
        padding: 20px;
        box-sizing: border-box;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #homeBtn {
        position: absolute;
        top: 10px;
        left: 10px;
    }
</style>