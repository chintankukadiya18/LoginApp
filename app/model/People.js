Ext.define('LoginApp.model.People', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'name',  type: 'string'},
		{name: 'email',   type: 'string'},
		{name: 'phone',   type: 'int'}
	]
});