<script>
    import Image from './Image.svelte'
    export let data;

    let card_index = 0;
    let totalFlashcards = data ? data.flashcards.length : 0;

    function goToPrev() {
        if (card_index > 0) {
            card_index--;
        } else {
            card_index = totalFlashcards - 1; //loop back to the last element
        }
    }

    function goToNext() {
        if (card_index < totalFlashcards - 1) {
            card_index++;
        } else {
            card_index = 0;
        }
    }

    $: totalFlashcards = data ? data.flashcards.length : 0; // Update totalFlashcards when data changes
</script>

<main class="container">
    <a href="/homepage"><button class="button" id="homeBtn">Back To Home</button></a><br/>
    <h1>Lesson 1: Fruits</h1>
    <div class="content">
        <div class="image">
            <Image src={data && data.flashcards[card_index].image_url}/>
        </div>
        <div class="card-wrapper">
            <div class="card-body">
                <div class="card-front">
                    <span class="english">{data && data.flashcards[card_index].english}</span>
                </div>
                <div class="card-back">
                    <span class="cantonese">{data && data.flashcards[card_index].cantonese}</span>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <div class="buttons">
        <button class="prev button" on:click={goToPrev}>Previous</button>
        <button class="next button" on:click={goToNext}>Next</button>
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
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        justify-content: space-between;
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