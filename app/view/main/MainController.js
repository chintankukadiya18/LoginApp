/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
    },
    onClickLogoutButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    onAddNewClick : function(){
         Ext.create({
             xtype : 'CandidateForm',
             store : this.lookupReference('mainList').store,
             name : 'ADD',
             callback : 'onAddClick'
        })
    },
    onUpdateClick : function () {
        Ext.create({
            xtype : 'CandidateForm',
            store : this.lookupReference('mainList').store,
            record : this.lookupReference('mainList').getSelection(),
            name : 'Update',
            callback : 'onUpdateClick'
        })
    },
    onDeleteClick : function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onConfirm : function (choice) {
        if (choice === 'yes') {
            var mainList = this.lookupReference('mainList');
            var store = mainList.store;
            var record = mainList.getSelection();
            store.remove(record[0]);
            store.sync();
            store.load();
        }
    }
});
