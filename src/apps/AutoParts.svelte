<script>
    import { Link } from 'svelte-routing';

    export let server;

</script>


<main>
    <h1>Автозапчасти</h1>
    {#each server.auto_parts as auto_part}
        <article>
            <h2>{auto_part.name}</h2>
            <h3>Цена: {auto_part.price} руб.</h3>
            <div class="btn">
                <Link to={"/auto_part/"+auto_part.id}>Подробнее</Link>
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