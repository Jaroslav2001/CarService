<script>
    import { onMount } from 'svelte';

    export let url_server;
    export let user;
    export let id;

    let service = {};
    let status = 0;
    let my_order = null;
    let order = {};

    onMount(async () =>{
        const res = await fetch(url_server+"/api/service/"+id);
        service = await res.json();

        order = {
            user: user.user,
            status: "Ищем ремонтника",
            service_id: [service],
            description: "Старт ремонтных работ"
        };

        status = res.status;
        order.user.hashed_password = "lol";
    
        console.log(order);
    });

    

    async function postOrder(){
        const res = await fetch(url_server+'/api/order',{
            method:"POST",
            mode:"cors",
            headers:{
                'Authorization': `Bearer ${user.token}`
            },
            body:JSON.stringify(order)
        })
        console.log(res);
        my_order = await res.json();
        status = res.status;
        console.log(my_order);
    }
</script>

<main>
    <article>
        <h2>{service.name}</h2>
        <h3>Цена: {service.price} руб.</h3>
        <h3>Описание</h3>
        <section><p>{@html service.description}</p></section>
        <h3>Дата появления услуги: {service.date}</h3>
        {#if !user.is_guest}
            <button
                on:click={postOrder}
            >Заказать</button>
        {/if}
        {#if user.is_admin}
            <button>Изменить</button>
        {/if}
    </article>
</main>

<style>
h2{
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

button{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 5px 0 5px 0;
    width: 100%;
}
</style>