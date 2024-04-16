<script>
    export let data;
  
    // let selectedPairs = [];
    let clicked_word = undefined;
    let clicked_image = undefined;

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
      window.location.reload();
    }
</script>

<div class="container">
    <a href="/homepage"><button class="button" id="homeBtn">Back To Home</button></a>
  <h1>Matching Mini-Game</h1>
  <p>Check the matching pairs and click submit to check your answer!</p>
  <div class="word-image-block">
    {#each data.words as w}
      <div class="block">
        <input type="radio" name="word" id={w.d_word} value={w.d_word} on:change={() => clicked_word = w}>
        <label for={w.d_word}>{w.d_word}</label>
        <input type="radio" name="image" id={w.d_image_url} value={w.d_image_url} on:change={() => clicked_image = w}>
        <label for={w.d_image_url}><img src={w.d_image_url} alt={`Picture ${w.word}`} /></label>
      </div>
    {/each}
  </div>
  <button class="button" id="submitBtn" on:click={checkAnswer}>Submit</button>
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
        top: 10px;
        left: 10px;
    }
</style>