<script>
    import {vocabScore} from '$lib/vocabScore.js';
    import {matchingScore} from '$lib/matchingScore';
    import {sentenceScore} from '$lib/sentenceScore';
</script>

<main class="container">
    <a href="/login"><button class="button" id="homeBtn">Logout</button></a><br/>
    <h1>CantoConnect</h1>
    <img src="src/routes/logo.jpg" alt="cute logo"><br/>
    <a href="/lesson1Animals"><button class="button">Lesson 1: Fruits</button></a><br/>
    <a href="/vocabulary"><button class="button">Vocabulary Mini-Game</button></a><br/>
    <a href="/matching"><button class="button">Matching Mini-Game</button></a>
    <a href="/sentence"><button class="button">Sentence Shuffle Mini-Game</button></a>
    <h3>Daily Report</h3>
    <p>Vocabulary: {$vocabScore}/2</p> 
    <p>Matching: {$matchingScore}</p>
    <p>Sentence Shuffle: {$sentenceScore}</p> 
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
    img {
        width: 200px;
        height: auto;
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
    #homeBtn {
        position: absolute;
        top: 10px;
        left: 10px;font-size: 14px;
        padding: 5px 10px;
        height: auto;
    }
</style>
