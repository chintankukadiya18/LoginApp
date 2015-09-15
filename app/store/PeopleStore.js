Ext.define('LoginApp.store.PeopleStore', {
	extend: 'Ext.data.Store',
	alias: 'store.peoplestore',
	model: 'LoginApp.model.People',
	data : [
		{name: 'chintan', email: 'abc@xyz.com',phone:'123'},
		{name: 'chintan', email: 'abc@xyz.com',phone:'123'},
		{name: 'chintan', email: 'abc@xyz.com',phone:'123'},
		{name: 'chintan', email: 'abc@xyz.com',phone:'123'},
	]
});