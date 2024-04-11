<script>
    const words = [
      { id: 1, word: '蘋果' },
      { id: 2, word: '橙' },
      { id: 3, word: '香蕉' }
    ];
  
    const pictures = [
      { id: 'a', image: 'https://via.placeholder.com/150' },
      { id: 'b', image: 'https://via.placeholder.com/150' },
      { id: 'c', image: 'https://via.placeholder.com/150' }
    ];
  
    let selectedPairs = [];

    function toggleSelection(id) {
      if (selectedPairs.includes(id)) {
        selectedPairs = selectedPairs.filter(item => item !== id);
      } else {
        selectedPairs.push(id);
      }
    }

    //check if correct pairs or not
    //if yes -> correct! and disable the checkboxes of the pair
    //if no -> try again!
    //when all checkboxes are disabled -> good job!
    //if user select less than 2 and more than 2 checkboxes, warning appear

</script>
  
<div class="container">
    <a href="/homepage"><button class="button" id="homeBtn">Back To Home</button></a>
  <h1>Matching Mini-Game</h1>
  <p>Check the matching pairs and click submit to check your answer!</p>
  <div class="word-image-block">
    {#each words as { id, word }}
      <div class="block">
        <input type="checkbox" id={`word${id}`} value={id} on:change={() => toggleSelection(id)}>
        <label for={`word${id}`}>{word}</label>
        <input type="checkbox" id={`pic${id}`} value={id} on:change={() => toggleSelection(id)}>
        <label for={`pic${id}`}><img src={pictures[id - 1].image} alt={`Picture ${id}`} /></label>
      </div>
    {/each}
  </div>
  <button class="button" id="submitBtn">Submit</button>
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