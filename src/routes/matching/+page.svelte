<script>
</script>

<body>
    <a href="/homepage"><button class="button">Back To Home</button></a>
    <h1>Matching mini-game</h1>
    <p>Match the Cantonese and English words together by dragging them.</p>
    <div class="container">
        <div>
            <ul class="draggableList">
                <li id="word1" draggable="true">西瓜</li>
                <li id="word2" draggable="true">橙</li>
                <li id="word3" draggable="true">蘋果</li>
            </ul>
        </div>
        <div>
            <ul class="draggableList">
                <li id="pic1" draggable="true">apple</li>
                <li id="pic2" draggable="true">orange</li>
                <li id="pic3" draggable="true">watermelon</li>
            </ul>
        </div>
    </div>
</body>

<style>
    /* why body making double border?? */
    body {
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
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
    }
    .draggableList {
        padding: 5px;
    }

    li {
        list-style: none;
        padding: 10px;
        margin: 5px;
        background-color: #cfd8dc;
        border: 1px solid #b0bec5;
        color: #263238;
        cursor: grab;
    }
</style>