import App from './App.svelte';

const app = new App({
	target: document.body,
	hydrate: true,
	props: {
		url: "",
		server_now: {
			user:{
				is_guest: false,
				is_admin: true,
				email: "root",
				password: "root",
			},
			users:[
				{
					is_guest: false,
					is_admin: true,
					email: "root",
					password: "root",
				}
			],
			services:[

			],
			auto_parts:[

			]
		}
	}
});

export default app;