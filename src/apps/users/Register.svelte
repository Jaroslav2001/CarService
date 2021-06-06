<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let server;

    let get = {
        email:"",
        password:"",
        password2:""
    }
    let result = null;

    let get_user = null;

    function setRegistration(event){
        dispatch('message',{
            registration: false
        });
    }

    function setServer(event){
        if(get.password != get.password2){
            result = false;
            return;
        }
        result = true;
        for(let user of server.users){
            console.log(user);
            if(user.email == get.email){
                    result = false;
            }
        }
        if(result){
            let new_server = server;
            new_server.user = {
				is_guest: false,
				is_admin: false,
				email: get.email,
				password: get.password,
			}
            dispatch('set_server',{
                server: new_server
            })
        }
    }
</script>

{#if result === null}
    <article>
        <h2>
            Вход
        </h2>
        <section>
            <h3>Email</h3>
            <input
                bind:value={get.email}
                type="email"
            />
            <h3>Пароль</h3>
            <input
                bind:value={get.password}
                type="password"
            />
            <h3>Повторный пароль</h3>
            <input
                bind:value={get.password2}
                type="password"
            />
            <button
                on:click={setRegistration}
            >Авторизация</button>
            <button
                on:click={setServer}
            >Зарегистрироваться</button>
        </section>
    </article>
{:else if result == false}
    <article>
        <h2>"Ошибка!"</h2>
    </article>
{/if}

<style>
h3, h2{
    text-align: center;
}

article{
    margin: 5px;
    padding: 35px;
    display: block;
    max-width: 1100px;
    border: black solid 3px;
    border-radius: 25px;
    background-color: rgba(240, 240, 240, 0.5);
}

input, button{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 5px 0 5px 0;
    width: 100%;
}

</style>