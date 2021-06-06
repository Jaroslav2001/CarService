<script>
    import Login from './users/Login.svelte';
    import Register from './users/Register.svelte';
    import User from './users/User.svelte';

    export let server;

    let registration = false;

    function setRegistration(event){
        registration = event.detail.registration;
    }

</script>

<main>
    {#if !server.user.is_guest}
        <User
            server={server}
            on:set_server
        />
    {:else if !registration}
        <Login
            server={server}
            on:set_server
            on:message={setRegistration}
        />
    {:else if registration}
        <Register
            server={server}
            on:set_server
            on:message={setRegistration}
        />
    {/if}
</main>