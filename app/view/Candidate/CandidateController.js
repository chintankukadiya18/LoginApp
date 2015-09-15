Ext.define('LoginApp.view.Candidate.CandidateController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.candidate',

    onAddClick: function() {
        var record = new LoginApp.model.People();
        var form = this.lookupReference('form');
        var gridPanel = form.ownerCt;
        var store =gridPanel.store;
        store.add(form.getValues());
        this.getView().destroy();
    }
});