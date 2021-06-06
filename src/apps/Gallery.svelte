<script>
    let gallerys = [
        {srt:"img/gallery/2.jpg", alt:"Картинка"},
        {srt:"img/gallery/3.jpg", alt:"Картинка"},
        {srt:"img/gallery/6.jpg", alt:"Картинка"},
        {srt:"img/gallery/8.jpg", alt:"Картинка"},
        {srt:"img/gallery/9.jpg", alt:"Картинка"},
        {srt:"img/gallery/10.jpg", alt:"Картинка"}
    ];
</script>

<main>
    <h2>Галерея</h2>

    {#each gallerys as gallery}
    <article>
        <section>
            <img src={gallery.srt} alt={gallery.alt}>
        </section>
    </article>
    {/each}

    <div class="top1"><a href="#top"><p>Вернутся в начало</p></a></div>
</main>

<style>
h2{
    text-align: center;
}

article{
    margin: 5px;
    padding: 35px 0 35px 0;
    display: block;
    max-width:1100px;
    border: black solid 3px;
    border-radius: 25px;
    background-color: rgba(240, 240, 240, 0.5);
}


</style>