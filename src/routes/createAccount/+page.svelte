<script>
    import { goto } from "$app/navigation";

    let username ='';
    let email = '';
    let password = '';
    let show_password = false
    $: type = show_password ? 'text' : 'password'

    function onInput (event) {
	    password = event.target.value
    }

    async function handleSubmit(event) {
        event.preventDefault();
        alert('Account created successfully!');
        goto('/login');
    }
</script>

<div class="container">
    <h1>Create Account</h1>
    <form id="createAccountForm" on:submit={handleSubmit}>
        <div class="form-group">
            <label for="username">Username</label><br/>
            <input type="text" id="newUsername" bind:value={username} required>
        </div>
        <div class="form-group">
            <label for="newEmail">Email</label><br/>
            <input type="email" id="newEmail" bind:value={email} required>
        
        </div>
        <div class="form-group">
            <label for="newPassword">Password</label><br/>
            <input type={type} on:input={ onInput } id="newPassword" required>
            <button type="button" on:click="{ () => show_password = !show_password }">
                {show_password ? 'Hide' : 'Show'}
            </button>
        </div>
        <br/>
        <button class="button" type="submit">Create Account</button>
    </form>
    <p>Already have an account? <a href="/login">Login</a></p>
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
