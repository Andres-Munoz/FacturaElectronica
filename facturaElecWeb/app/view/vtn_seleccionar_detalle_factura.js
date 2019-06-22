/*
 * File: app/view/vtn_seleccionar_detalle_factura.js
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

Ext.define('facturaElecWeb.view.vtn_seleccionar_detalle_factura', {
    extend: 'Ext.Dialog',
    alias: 'widget.vtn_seleccionar_detalle_factura',

    requires: [
        'facturaElecWeb.view.vtn_seleccionar_detalle_facturaViewModel',
        'facturaElecWeb.view.grd_product',
        'Ext.field.Search',
        'Ext.grid.Grid',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'vtn_seleccionar_detalle_factura'
    },
    height: '90%',
    id: 'vtn_seleccionar_detalle_factura',
    width: '60%',
    displayed: true,
    closable: true,
    closeToolText: 'Cerra',
    titleAlign: 'center',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'container',
            name: 'buscar_detalle',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'searchfield',
                    validators: function(value) {
                        if(!/^([0-9])*$/.test(value)){
                            return "El documento debe ser  un número entero";
                        }else if(value<0){
                            return "La cantidad de caracteres ingresada es inválida";

                        }else{
                            return true;
                        }
                    },
                    height: '10%',
                    itemId: 'buscar_cliente_factura',
                    name: 'search_field_cliente',
                    width: '70%',
                    labelCls: 'my-text',
                    placeholder: 'Buscar por documento',
                    bind: {
                        hidden: '{detalleCliente}'
                    },
                    listeners: {
                        keyup: 'onBuscar_cliente_facturaKeyup'
                    }
                },
                {
                    xtype: 'searchfield',
                    validators: function(value) {
                        if(!/^([0-9])*$/.test(value)){
                            return "El nit debe ser  un número entero";
                        }else if(value<0){
                            return "La cantidad de caracteres ingresada es inválida";

                        }else{
                            return true;
                        }
                    },
                    itemId: 'buscar_empresa_factura',
                    name: 'search_field_company',
                    width: '70%',
                    labelCls: 'my-text',
                    placeholder: 'Buscar por nit',
                    bind: {
                        hidden: '{detalleEmpresa}'
                    },
                    listeners: {
                        keyup: 'onBuscar_empresa_facturaKeyup'
                    }
                },
                {
                    xtype: 'searchfield',
                    validators: function(value) {
                        if(!/^([0-9])*$/.test(value)){
                            return "El codigo debe ser  un número entero";
                        }else if(value<0){
                            return "La cantidad de caracteres ingresada es inválida";

                        }else{
                            return true;
                        }
                    },
                    itemId: 'buscar_producto_factura',
                    name: 'search_field_product',
                    width: '70%',
                    labelCls: 'my-text',
                    placeholder: 'Buscar por codigo',
                    bind: {
                        hidden: '{detalleProducto}'
                    },
                    listeners: {
                        keyup: 'onBuscar_producto_facturaKeyup'
                    }
                }
            ]
        },
        {
            xtype: 'grid',
            height: '100%',
            id: 'grd_client_factura',
            width: '100%',
            scrollable: 'vertical',
            layout: 'vbox',
            store: 'store_gestion_cliente',
            bind: {
                hidden: '{detalleCliente}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: '20%',
                    dataIndex: 'documento',
                    text: 'Documento'
                },
                {
                    xtype: 'gridcolumn',
                    width: '25%',
                    dataIndex: 'nombre',
                    text: 'Nombre'
                },
                {
                    xtype: 'gridcolumn',
                    width: '15%',
                    dataIndex: 'ciudad',
                    text: 'Ciudad'
                },
                {
                    xtype: 'gridcolumn',
                    width: '15%',
                    dataIndex: 'telefono',
                    text: 'Telefono'
                },
                {
                    xtype: 'gridcolumn',
                    width: '25%',
                    dataIndex: 'correo',
                    text: 'Correo'
                }
            ],
            listeners: {
                select: 'onGridSelect1'
            }
        },
        {
            xtype: 'grid',
            height: '100%',
            id: 'grd_company_factura',
            width: '100%',
            layout: 'vbox',
            store: 'store_gestion_empresa',
            bind: {
                hidden: '{detalleEmpresa}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: '20%',
                    dataIndex: 'nit',
                    text: 'Nit'
                },
                {
                    xtype: 'gridcolumn',
                    width: '30%',
                    dataIndex: 'nombre',
                    text: 'Nombre'
                },
                {
                    xtype: 'gridcolumn',
                    width: '20%',
                    dataIndex: 'telefono',
                    text: 'Telefono'
                },
                {
                    xtype: 'gridcolumn',
                    width: '30%',
                    dataIndex: 'email',
                    text: 'E-mail'
                }
            ],
            listeners: {
                select: 'onGridSelect2'
            }
        },
        {
            xtype: 'grd_product',
            bind: {
                hidden: '{detalleProducto}'
            }
        }
    ],

    onBuscar_cliente_facturaKeyup: function(textfield, e, eOpts) {
        var filter= textfield.getValue();
        if (e.event.keyCode == 13){
            Ext.getCmp('vtn_seleccionar_detalle_factura').fn_find_detalle(filter,1);
        }if(!textfield.getValue()){
            Ext.getCmp('vtn_seleccionar_detalle_factura').fn_find_detalle(null,1);
        }
    },

    onBuscar_empresa_facturaKeyup: function(textfield, e, eOpts) {
        var filter= textfield.getValue();
        if (e.event.keyCode == 13){
            Ext.getCmp('vtn_seleccionar_detalle_factura').fn_find_detalle(filter,2);
        }
        if(!textfield.getValue()){
            Ext.getCmp('vtn_seleccionar_detalle_factura').fn_find_detalle(null,2);
        }
    },

    onBuscar_producto_facturaKeyup: function(textfield, e, eOpts) {
        var filter= textfield.getValue();
        if (e.event.keyCode == 13){
            Ext.getCmp('vtn_seleccionar_detalle_factura').fn_find_detalle(filter,3);
        }
        if(!textfield.getValue()){
            Ext.getCmp('vtn_seleccionar_detalle_factura').fn_find_detalle(null,3);
        }
    },

    onGridSelect1: function(dataview, selected, eOpts) {
        var filter = selected[0].data.documento;
        Ext.Msg.show({
            title: 'Confirmación',
            message: '¿Está seguro de agregar el cliente con documento '+filter+ '?' ,
            width: 300,
            closable: false,
            buttons: [{
                text: 'No',
                itemId: 'no'
            }, {
                text: 'Si',
                itemId: 'yes'
            }],
            multiline: false,
            fn: function (buttonValue, inputText, showConfig) {
                if(buttonValue === "yes"){
                    Ext.getCmp('txt_cliente_factura').setValue(filter);
                    Ext.getCmp('vtn_seleccionar_detalle_factura').close();
                    Ext.toast('El cliente se agrego con Exito', 1000);
                }else{
                    this.close();
                }
            },
            icon: Ext.Msg.QUESTION
        });
    },

    onGridSelect2: function(dataview, selected, eOpts) {
        var filter = selected[0].data.nit;
        Ext.Msg.show({
            title: 'Confirmación',
            message: '¿Está seguro de agregar la empresa con nit '+filter+ '?' ,
            width: 300,
            closable: false,
            buttons: [{
                text: 'No',
                itemId: 'no'
            }, {
                text: 'Si',
                itemId: 'yes'
            }],
            multiline: false,
            fn: function (buttonValue, inputText, showConfig) {
                if(buttonValue === "yes"){
                    Ext.getCmp('txt_empresa_factura').setValue(filter);
                    Ext.getCmp('vtn_seleccionar_detalle_factura').close();
                    Ext.toast('La empresa se agrego con Exito', 1000);
                }else{
                    this.close();
                }
            },
            icon: Ext.Msg.QUESTION
        });
    },

    fn_find_detalle: function(filter, detalle) {
        switch(detalle)
        {
            case 1:
                var storeClient = Ext.getStore('store_gestion_cliente');
                storeClient.proxy.extraParams ={
                    filtro : filter
                };


                storeClient.load({
                    params:{
                        filtro:filter
                    },
                    callback: function(records, operation, success) {
                        if(success){
                            var noAlmacenado=false;
                            var total = storeClient.totalCount;
                            if(total === 0){
                                Ext.toast('No hay resultados para la búsqueda',1000);
                            }

                        }
                    }
                });
                break;
            case 2:
                var storeCompany = Ext.getStore('store_gestion_empresa');

                storeCompany.proxy.extraParams ={
                    filtro : filter
                };


                storeCompany.load({
                    params:{
                        filtro:filter
                    },
                    callback: function(records, operation, success) {
                        if(success){
                            var noAlmacenado=false;
                            var total = storeCompany.totalCount;
                            if(total === 0){
                                Ext.toast('No hay resultados para la búsqueda',1000);
                            }

                        }
                    }
                });
                break;
            case 3:
                var storeProduct = Ext.getStore('store_gestion_producto');
                storeProduct.proxy.extraParams ={
                    filtro : filter
                };


                storeProduct.load({
                    params:{
                        filtro:filter
                    },
                    callback: function(records, operation, success) {
                        if(success){
                            var noAlmacenado=false;
                            var total = storeProduct.totalCount;
                            if(total === 0){
                                Ext.toast('No hay resultados para la búsqueda',1000);
                            }

                        }
                    }

                });

                break;
        }
    }

});