<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let server;

    let result = null;
    let result_body = null;

    let get = {
        email:"",
        password:""
    }
    let get_user = null;

    function setRegistration(event){
        dispatch('message',{
            registration: true
        });
    }

    function setUser(event){
        result = false;
        for(let user of server.users){
            console.log(user);
            if(user.email == get.email){
                if(user.password == get.password){
                    result = true;
                    result_body = user;
                }
            }
        }
        if(result){
            let new_server = server;
            new_server.user = result_body
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
            <button
                on:click={setRegistration}
            >Регистрация</button>
            <button
                on:click={setUser}
            >Войти</button>
        </section>
    </article>
{:else if !result}
    <article>
        <h3>Ошибка ввода!</h3>
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