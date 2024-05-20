const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
			,contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/ceasars_contacts/contacts")
				.then(Response => Response.json())
				.then(data => {
				console.log(data);
				setStore({contacts:data.contacts})
					});

			},
			saveContact:async (newContact) => {
				const store = getStore()
				const newContacts = [...store.contacts,newContact]

				try{
					await fetch("https://playground.4geeks.com/contact/agendas/ceasars_contacts/contacts",{
						method:"POST",
						headers:{
							"Content-Type":"application/json"
						},
						body: JSON.stringify(newContact)
					})
				} catch(e){
					console.log("failed to add new contact")
				}
				setStore({contacts:newContacts})
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

			},
			changeColor: (index, color) => {
				//get the store

				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
