/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'LoginApp.view.main.MainController',
        'LoginApp.view.main.MainModel',
        'LoginApp.view.main.List'
    ],
    plugins: 'viewport',
    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex : 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 40
                }
            }
        }
    },

    items: [{
        title: 'Pepole',
        iconCls: 'fa-users',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype : 'mainlist',
             reference : 'mainList'
        }]
    }, {
        title: 'Take Attendence',
        iconCls: 'fa-pencil-square',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Reports',
        iconCls: 'fa-certificate',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }],
    listeners: {
            afterrender: function(panel) {
                var bar = panel.tabBar;
                bar.insert(4, [{
                    xtype: 'component',
                    flex: 1
                }, {
                    xtype: 'button',
                    text: 'Logout',
                    handler: 'onClickLogoutButton'
                }]);
            }
        }
});
