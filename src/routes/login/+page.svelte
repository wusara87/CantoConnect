

<script>
    import {goto} from '$app/navigation';
	let username = '';
	let password = '';
    let show_password = false
    $: type = show_password ? 'text' : 'password'
	
    function onInput (event) {
	    password = event.target.value
    }
    function login () {
        goto("/flashcard");
    }
</script>

<h1>Log in Page</h1>
<br/>
<input bind:value={username} placeholder="enter your username" /> <br/>
<input { type } { password } on:input={ onInput } placeholder="enter your password" />

<button type="button" on:click="{ () => show_password = !show_password }">{show_password ? 'Hide' : 'Show'}</button>
<button on:click={() => {goto('/flashcard')}}>Log In</button>
