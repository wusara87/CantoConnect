<script>
  import {matchingScore} from '$lib/matchingScore.js';
  export let data;

  let clicked_word = undefined;
  let clicked_image = undefined;
  let count = 0;
  let allMatched = false;

  function checkAnswer() {
    if (!clicked_image || !clicked_word) {
      alert("Please select one option for each word and image.");
      return;
    }
    if (clicked_image.a_word != clicked_word.d_word) {
      alert("Incorrect match. Please try again.");
      return;
    }
    alert("Correct match!");
    disableCorrectPair(clicked_word, clicked_image);
    clicked_image = undefined;
    clicked_word = undefined;
    count++;
    if (count === 3) {
      allMatched = true;
      matchingScore.set('Completed');
    }
  }

  function disableCorrectPair(word, image) {
    const wordRadio = document.getElementById(word.d_word);
    const imageRadio = document.getElementById(image.d_image_url);
    if (wordRadio) wordRadio.disabled = true;
    if (imageRadio) imageRadio.disabled = true;
  }
</script>

<div class="container">
    <a href="/homepage"><button class="button" id="homeBtn">Back To Home</button></a><br/>
    <h1>Matching Mini-Game</h1>
    <p>Check the matching pairs and click submit to check your answer!</p>
    <div class="word-image-block">
      {#each data.words as w}
        <div class="block">
          <input type="radio" name="word" id={w.d_word} value={w.d_word} on:change={() => clicked_word = w} disabled={w.matched}>
          <label for={w.d_word}>{w.d_word}</label>
          <input type="radio" name="image" id={w.d_image_url} value={w.d_image_url} on:change={() => clicked_image = w} disabled={w.matched}>
          <label for={w.d_image_url}><img src={w.d_image_url} alt={`Picture ${w.word}`} /></label>
        </div>
      {/each}
    </div>
    {#if !allMatched}
      <button class="button" id="submitBtn" on:click={checkAnswer}>Submit</button>
    {/if}
    {#if allMatched}
      <p>You have completed the mini-game!</p>
      <a href="/homepage"><button class="button" id="returnBtn">Return to Hompage</button></a><br/>
    {/if}
</div>

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

  .block {
    margin-bottom: 20px; 
    display: flex;
    align-items: center; 
    justify-content: center; 
  }

  .block label img {
    max-width: 150px;
    height: auto; 
    border-radius: 5px;
    margin-left: 10px;
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
    #returnBtn {
      margin: 0px;
    }
</style>