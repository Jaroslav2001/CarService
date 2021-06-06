<script>
    import { Link } from 'svelte-routing';

    export let server;


    function is_admin(){
        if(server.user.is_admin){
            return "";
        }
        return "/visibility";
    }
</script>


<main>
    <h1>Услуги</h1>
    {#each server.services as service}
        <article>
            <h2>{service.name}</h2>
            <h3>Цена: {service.price} руб.</h3>
            <div class="btn">
                <Link to={"/service/"+service.id}>Подробнее</Link>
            </div>
        </article>   
    {/each}
</main>

<style>
main > h1, h2{
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
</style>