<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let server;

    function setServer(event){
        let now_server = server;
        now_server.user = {
			is_guest: true,
			is_admin: false,
			email: "",
			password: "",
		}
        dispatch('set_server',{
            server:now_server
        })
        console.log(server);
    }
</script>

<article>
    <h2>Email: {server.user.email}</h2>
    <h3>Admin: {server.user.is_admin}</h3>
    <button
        on:click={setServer}
    >Выйти</button>
</article>

<style>
    article{
    margin: 5px;
    padding: 35px;
    display: block;
    max-width: 1100px;
    border: black solid 3px;
    border-radius: 25px;
    background-color: rgba(240, 240, 240, 0.5);
}

button{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 5px 0 5px 0;
    width: 100%;
}
</style>