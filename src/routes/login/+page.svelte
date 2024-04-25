<script>
    import {goto} from '$app/navigation';
	let username = '';
	let password = '';
    let show_password = false
    $: type = show_password ? 'text' : 'password'

    function onInput (event) {
	     password = event.target.value
    }

    async function handleSubmit(event) {
        event.preventDefault();
        goto('/homepage');
    }
</script>

<div class="container">
    <h1>Log In</h1>
    <br/>
    <form id="loginForm" on:submit={handleSubmit}>
        <div class="form-group">
            <label for="username">Username</label><br/>
            <input id="username" bind:value={username} placeholder="enter your username" required/>
        </div>
        <div class="form-group">
            <label for="password">Password</label><br/>
            <input type={type} on:input={ onInput } placeholder="enter your password" required/> 
            <button type="button" on:click="{ () => show_password = !show_password }">
                {show_password ? 'Hide' : 'Show'}
            </button>
        </div>
        <br/>
        <button class="button" type="submit">Log In</button>
    </form>
    <p>Don't have an account? <a href="/createAccount">Create one</a></p>
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
    .form-group {
        text-align: left;
        margin-left: 120px;
    }
    input {
        margin: 4px;
    }
    .button {
        margin: 0px;
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