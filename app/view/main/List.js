/**
 * This view is an example list of people.
 */
Ext.define('LoginApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'LoginApp.store.PeopleStore'
    ],

    title: 'Personnel',
    bbar: [{ 
        xtype: 'button',
        text: 'Add New',
        handler : 'onAddNewClick'
    },{ 
        xtype: 'button', 
        text: 'Update' 
    },{ 
        xtype: 'button', 
        text: 'Delete' 
    }],
    store: {
        type: 'peoplestore'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
