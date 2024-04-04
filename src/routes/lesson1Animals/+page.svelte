<script>
	import Image from './Image.svelte'
    export let data;
    let card_index = 0;
</script>

<main class="container">
    <h1>Lesson 1: Animals</h1>
    <div class="content">
        <div class="image">
            <Image src="{data.flashcards[card_index].image_url}"/>
        </div>
        <div class="card-wrapper">
            <div class="card-body">
                <div class="card-front">
                    <span class="english">{data.flashcards[card_index].english}</span>
                </div>
                <div class="card-back">
                    <span class="cantonese">{data.flashcards[card_index].cantonese}</span>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <div class="buttons">
        <button class="prev" on:click={()=>{card_index--}}>Previous</button>
        <button class="next" on:click={()=>{card_index++}}>Next</button>
    </div>
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
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .image {
        width: 400px;
        height: 400px;
        margin-bottom: 20px;
    }
    .card-wrapper {
        width: 25rem;
        height: 200px;
    }
	.card-body {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 15px 35px rgba(0,0,0,0.2),0 5px 15px rgba(0,0,0,0.19);
	}
	.card-front, .card-back {
        background-color: #ffffff;
      	position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
	}
	.card-front span, .card-back span {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        font-size: large;
        margin: 0;
	}
	.card-back {
        transform: rotateX(180deg);
	}
	.card-wrapper:hover .card-body {
        transform: rotateX(180deg);
	}
    .buttons {
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>