<script>
    export let data;

    let words = data.reformattedSentences;
    let currentIndex = 0;
    let selectedWords = [];
    let userSentence = '';
    let showQuizComplete = false;

    console.log(words);

    function selectWord(word) {
        if (selectedWords.includes(word)) {
            selectedWords = selectedWords.filter(w => w !== word);
        } else {
            selectedWords.push(word);
        }
        userSentence = selectedWords.join('');
        selectedWords = [...selectedWords];
    }

    function checkAnswer() {
        const correctSentence = words[currentIndex].sentence.trim();
        if (userSentence.trim() === correctSentence) {
            alert('Correct! You formed the sentence.');
            currentIndex++;
            selectedWords = [];
            userSentence = '';
            if (currentIndex === words.length) {
                showQuizComplete = true;
            }
        } else {
            alert('Incorrect. Try again.');
        }
    }

    function clear() {
        selectedWords = [];
        userSentence = '';
    }

    function restartGame() {
        currentIndex = 0;
        showQuizComplete = false;
    }
</script>

<main class="container">
    <a href="/homepage"><button class="button" id="homeBtn">Back To Home</button></a> <br/>
    <h1>Sentence Shuffle</h1>
    {#if !showQuizComplete}
        <p>Click on the words to form a sentence:</p>
        <div class="word-container">
            {#if currentIndex < words.length}
                {#each words[currentIndex].words as word}
                    <button class="word" on:click={() => selectWord(word)} class:selected={selectedWords.includes(word)}>
                        {word}
                    </button>
                {/each}
            {/if}
        </div>
        <div class="sentence">
            <p>Your Sentence: {userSentence}</p>
            <button class="button" on:click={checkAnswer}>Submit</button>
            <button class="button" on:click={clear}>Clear</button>
        </div>
    {/if}
    {#if showQuizComplete}
        <div>
            <p>Congratulations! You have completed the mini-game.</p>
            <button class="button" on:click={restartGame}>Try Again</button>
        </div>
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
    .word-container {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 20px;
        justify-content: center;
    }

    .word {
        padding: 5px 10px;
        background-color: #f0f0f0;
        border-radius: 5px;
        cursor: pointer;
    }

    .word.selected {
        background-color: #a0a0a0;
    }

    .sentence {
        margin-top: 20px;
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
