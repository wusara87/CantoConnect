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
        goto('/lesson1Animals');
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
        <button type="submit">Log In</button>
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
</style>