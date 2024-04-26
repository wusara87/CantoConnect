<script>
    export let data; 

    let currentQuestionIndex = 0;
    let quizData = data.reformattedQuestions;
    let selectedOption = '';
    let feedbackMessage = '';
    let showFeedback = false;
    let totalQuestions = quizData.length;
    let showQuizCompleted = false;
    let vocabScore = 0;

    function submitAnswer() {
        if(!selectedOption) {
            alert("Please select an option.");
            return;
        }
        const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
        if (correctAnswer.includes(selectedOption)) {
            feedbackMessage = 'Correct!';
            vocabScore++;
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
        vocabScore = 0;
        selectedOption = '';
        feedbackMessage = '';
        showFeedback = false;
        showQuizCompleted = false;
    }
</script>

<main class="container">
    <a href="/homepage"><button class="button" id="homeBtn">Back To Home</button></a><br/>
    <h1>Vocabulary Mini-Game</h1>
    {#if currentQuestionIndex < quizData.length}
        <p>{quizData[currentQuestionIndex].question}</p>
        {#each quizData[currentQuestionIndex].options as option}
            <input type="radio" bind:group={selectedOption} value={option} id={option} />
            <label for={option}>{option}</label><br>
        {/each}
        {#if !showFeedback}
            <button class="button" on:click={submitAnswer}>Submit</button>
        {/if}
        {#if showFeedback && currentQuestionIndex < quizData.length - 1}
            <p>{feedbackMessage}</p>
            <button class="button" on:click={nextQuestion}>Next Question</button>
        {:else if showFeedback}
            <p>{feedbackMessage}</p>
            <button class="button" on:click={() => currentQuestionIndex = quizData.length}>Done</button>
        {/if}
    {:else}
        <p>Congratulations, you have completed the quiz!</p>
        <p>Score: {vocabScore}/{totalQuestions}</p>
        <button class="button" on:click={tryAgain}>Try Again</button>
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
        top: 0px;
        left: 0px;
    }
    .button {
        margin: 20px;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        cursor: pointer;
        border: 3px solid;
        padding: 0.25em 0.5em;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .button:active {
        box-shadow: 0px 0px 0px 0px;
        top: 5px;
        left: 5px;
    }

    @media (min-width: 768px) {
        .button {
            padding: 0.25em 0.75em;
        }
    }
</style>