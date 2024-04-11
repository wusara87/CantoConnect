<script>
    export let data;
  
    // let selectedPairs = [];
    let clicked_word = undefined;
    let clicked_image = undefined;

    function toggleSelection(id) {
    //   if (selectedPairs.includes(id)) {
    //     selectedPairs = selectedPairs.filter(item => item !== id);
    //   } else {
    //     selectedPairs.push(id);
    //   }
    }

    function checkAnswer() {
      if (!clicked_image || !clicked_word) {
        console.log("pick one of each");  //error
        return;
      }
      if (clicked_image.a_word != clicked_word.d_word) {
        console.log("Wrong");
        return;
      }
      console.log("Correct");
      console.log({clicked_image})
      console.log({clicked_word})
    }

    //check if correct pairs or not
    //if yes -> correct! and disable the checkboxes of the pair (remove)
    //if no -> try again!
    //when all checkboxes are disabled -> good job!
    //if user select less than 2 and more than 2 checkboxes, warning appear

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
    margin-bottom: 20px; /* Add space between blocks */
    display: flex;
    align-items: center; /* Align items vertically in each block */
    justify-content: center; /* Center items horizontally */
  }

  .block input[type="checkbox"] {
    margin-right: 10px; /* Add space between checkbox and label */
  }

  .block input[type="checkbox"] + label img {
    max-width: 100px; /* Set maximum width for images */
    height: auto; /* Allow images to resize proportionally */
    border-radius: 5px;
    margin-left: 10px; /* Add space between image and checkbox */
  }
  #homeBtn {
        position: absolute;
        top: 10px;
        left: 10px;
    }
</style>