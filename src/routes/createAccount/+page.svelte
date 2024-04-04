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
        <button type="submit">Create Account</button>
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
</style>
