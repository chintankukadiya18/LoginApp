Ext.define('LoginApp.store.PeopleStore', {
    extend : 'Ext.data.Store',
    alias : 'store.peoplestore',
    model : 'LoginApp.model.People',
    data : [
        {name : 'chintan', email : 'abc@xyz.com', phone : '123'},
        {name : 'chintan', email : 'abc@xyz.com', phone : '123'},
        {name : 'chintan', email : 'abc@xyz.com', phone : '123'},
        {name : 'chintan', email : 'abc@xyz.com', phone : '123'}
    ],
    proxy : {
        type : 'ajax',
        // url : 'google.com',
        actionMethods : {
            create : 'POST',
            read : 'POST',
            update : 'POST',
            destroy : 'POST'
        },
        api : {
            read : 'byms.php?action=list',
            create : 'byms.php?action=create',
            update : 'byms.php?action=update',
            destroy : 'byms.php?action=destroy'
        }
    }
});