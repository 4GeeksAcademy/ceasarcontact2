const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ceasars_contacts")
					.then((response) => {
						if (response.ok) {
							return response.json();
						}
					})
					.then((body) => {
						setStore({
							contacts: body
						});
					});

			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {

			},
			changeColor: (index, color) => {

				const store = getStore();


				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;