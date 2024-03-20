<script>
	import Image from './Image.svelte'
    export let data;
    let card_index = 0;
</script>

<h1>Flashcard</h1>

<Image src="{data.flashcards[card_index].image_url}" />
<span class="english">{data.flashcards[card_index].english}</span>
<span class="cantonese">{data.flashcards[card_index].cantonese}</span>


<button on:click={()=>{card_index--}}>Previous</button>
<button on:click={()=>{card_index++}}>Next</button>