/*
 * File: app/store/store_gestion_empresa.js
 *
 * This file was generated by Sencha Architect version 4.2.5.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('facturaElecWeb.store.store_gestion_empresa', {
    extend: 'Ext.data.Store',

    requires: [
        'facturaElecWeb.model.model_gestion_empresa',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'store_gestion_empresa',
            autoLoad: true,
            model: 'facturaElecWeb.model.model_gestion_empresa',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'empresaController/agregarEmpresa',
                    read: 'empresaController/listarEmpresas',
                    update: 'empresaController/actualizarEmpresa',
                    destroy: 'empresaController/eliminarEmpresa'
                },
                timeout: 600000,
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    allowSingle: false
                }
            },
            listeners: {
                onAjaxOnAjaxException: {
                    fn: me.onJsonstoreOnAjaxOnAjaxException
                }
            }
        }, cfg)]);
    },

    onJsonstoreOnAjaxOnAjaxException: function(jsonstore) {
        facturaElec.app.showError(proxy, operation, this);
    }

});