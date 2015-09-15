Ext.define('LoginApp.view.Candidate.CandidateTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'CandidateTab',

    requires: [
     	'Ext.plugin.Viewport',
        'Ext.window.MessageBox'
    ],
    tabPosition : 'left',
    height:800,
  tabBar: {
        width: 180,
        minTabWidth: 80,
        maxTabWidth: 80,
        minTabHeight : 200,
        maxTabHeight:200,
        height : 200
    },
    tabRotation : '0',
    items: [{
        title: 'List'
    }, {
        title: 'AddNew',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: '',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        bind: {
            html: '{loremIpsum}'
        }
    }],
});