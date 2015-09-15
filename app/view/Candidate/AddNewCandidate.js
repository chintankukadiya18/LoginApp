Ext.define('LoginApp.view.Candidate.AddNewCandidate', {
   extend: 'Ext.window.Window',
    xtype: 'AddNewCandidate',
    requires: [
        'LoginApp.view.Candidate.CandidateController',
       	'Ext.form.Panel',
       	'LoginApp.store.Personnel'
    ],
    controller: 'candidate',
    store: undefined,
    constructor: function (config) {
        config = config || {};
    config = Ext.applyIf(config, {
    bodyPadding: 10,
    title: 'Login Window',
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'email',
            inputType: 'email',
            fieldLabel: 'Email',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'phone',
            inputType: 'number',
            fieldLabel: 'Phone',
            allowBlank: false
        }],
        buttons: [{
            text: 'Add',
            formBind: true,
            listeners: {
                click: 'onAddClick',
                scope: 'controller'
            }
        }]
    }

});
    LoginApp.view.Candidate.AddNewCandidate.superclass.constructor.call(this, config);
    }
});