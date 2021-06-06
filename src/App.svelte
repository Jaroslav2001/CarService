<script>
	import {Router, Route, Link} from 'svelte-routing';

	import Contacts from './apps/Contacts.svelte';
	import Gallery from './apps/Gallery.svelte';
	import Index from './apps/Index.svelte';
	import Orders from '../../car-service-3/src/apps/Orders.svelte';
	import Services from './apps/Services.svelte';
	import Service from './apps/service/Service.svelte';
	import Users from './apps/Users.svelte';
	import AutoParts from './apps/AutoParts.svelte';
	import AutoPart from './apps/auto_part/AutoPart.svelte';

	export let server_now;
	export let url = "";

	let server = {};

	if(localStorage.getItem('set_server') === null){
		server = server_now;
	}else{
		server = JSON.parse(localStorage.getItem('set_server'));
	}

	function setServer(event){
		server = event.detail.server;
		localStorage.setItem('set_server',JSON.stringify(server))
		console.log(server);
	}

</script>

<Router url={url}>
	<header>
		<div class="logo"></div>
		<div class="description">
			<div class="wrapper">
				<div class="name"><h1>Автомастерская</h1></div>
				<div class="number"><h2>+79516052951</h2></div>
			</div>
			<nav>
				<ul>
					<li><Link to="/">Главная</Link></li>
					<li><Link to="/services">Услуги</Link></li>
					{#if server.user.is_admin}
						<li><Link to="/auto_parts">Автозапчасти</Link></li>
					{/if}
					<li><Link to="/contacts">Контакты</Link></li>
					<li><Link to="/gallery">Галерея</Link></li>
					<li><Link to="/orders">Заказы</Link></li>
                	{#if server.user.is_guest}
						<li><Link to="/users">Гость</Link></li>
					{:else}
					<li><Link to="/users">{server.user.email}</Link></li>
					{/if}
				</ul>
			</nav>
		</div>
	</header>
	
	<Route path="/users">
		<Users
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	<Route path="/services">
		<Services
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	<Route path="/service/:id" let:params>
		<Service
			id={params.id}
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	{#if server.user.is_admin}
	<Route path="/auto_parts">
		<AutoParts
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	{/if}
	<Route path="/auto_part/:id" let:params>
		<AutoPart
			id={params.id}
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	<Route path="/contacts">
		<Contacts
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	<Route path="/gallery">
		<Gallery
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	<Route path="/orders">
		<Orders
			server={server}
			on:set_server={setServer}
		/>
	</Route>
	<Route path="/">
		<Index
			server={server}
			on:set_server={setServer}
		/>
	</Route>

	<footer>
        <div class="legal-info"><p>&#169 2021 Автомастерская у Бобби</p></div>
        <div class="contacts">
            <div class="number"><p>+79516052951</p></div>
            <div class="email"><p>CarServicesBob@gmail.com</p></div>
        </div>
    </footer>
</Router>

<style>

</style>