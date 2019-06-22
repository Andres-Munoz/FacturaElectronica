/*
 * File: app/view/vtn_generar_cliente.js
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

Ext.define('facturaElecWeb.view.vtn_generar_cliente', {
    extend: 'Ext.Dialog',
    alias: 'widget.vtn_generar_cliente',

    requires: [
        'facturaElecWeb.view.vtn_generar_productoViewModel1',
        'Ext.form.Panel',
        'Ext.Img',
        'Ext.field.ComboBox',
        'Ext.Button'
    ],

    viewModel: {
        type: 'vtn_generar_cliente'
    },
    height: '90%',
    id: 'vtn_generar_cliente',
    itemId: 'vtn_generar_cliente',
    name: 'vtn_generar_cliente',
    width: '60%',
    displayed: true,
    scrollable: 'vertical',
    layout: 'center',
    closable: true,
    closeToolText: 'Cerrar',
    titleAlign: 'center',

    items: [
        {
            xtype: 'formpanel',
            id: 'frm_clientes',
            width: '100%',
            items: [
                {
                    xtype: 'container',
                    name: 'ctn_image_client',
                    margin: '-7 0 10 0',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'image',
                            cls: 'image-generic-frm',
                            name: 'image_client',
                            src: 'https://image.flaticon.com/icons/svg/80/80886.svg'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    name: 'ctn_frm_client',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            name: 'ctn_column_left_client',
                            width: '50%',
                            margin: '0 10 0 0',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'combobox',
                                    name: 'tipoDocumento',
                                    width: '100%',
                                    label: 'Tipo de documento',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite el tipo de documento',
                                    displayField: 'nombre',
                                    store: [
                                        {
                                            sigla: 'CC',
                                            nombre: 'Cédula de ciudadanía'
                                        },
                                        {
                                            sigla: 'CE',
                                            nombre: 'Cédula de extranjería'
                                        },
                                        {
                                            sigla: 'PS',
                                            nombre: 'Pasaporte'
                                        }
                                    ],
                                    valueField: 'sigla',
                                    queryMode: 'local'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        if(value.length>100){
                                            return "El nombre supera el tamaño permitido (100)";
                                        }else if(/^([0-9])*$/.test(value)){
                                            return "El nombre tiene caracteres invalidos.(0-9)";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'nombre',
                                    width: '100%',
                                    label: 'Nombre',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un nombre'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        if(value.length>100){
                                            return "La campo ciudad supera el tamaño permitido (100)";
                                        }else if(/^([0-9])*$/.test(value)){
                                            return "El campo ciudad tiene caracteres invalidos.(0-9)";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'ciudad',
                                    width: '100%',
                                    label: 'Ciudad',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite una ciudad'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        var store= Ext.getStore('store_gestion_cliente');
                                        var Existente=false;
                                        var idClient=null;
                                        var idForm=Ext.getCmp('frm_clientes').getRecord()?Ext.getCmp('frm_clientes').getRecord().id :null;
                                        store.each(function(record){
                                            if(value == record.data.telefono){
                                                Existente=true;
                                                idClient=record.id;
                                            }
                                        });

                                        if ((!Ext.isEmpty(value)) && (Ext.isEmpty(value.trim()))) {
                                            return "El campo telefono no admite espacios";
                                        }else if(value.length>20){
                                            return "El numero de telefono supera el tamaño permitido (20)";
                                        }else if(!/^([0-9])*$/.test(value)){
                                            return "El telefono debe ser  un número entero";
                                        }else if(Existente && idClient!=idForm){
                                            return "Ya existe un cliente con este telefono";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'telefono',
                                    width: '100%',
                                    label: 'Telefono',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un telefono'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            name: 'ctn_column_rigth_client',
                            width: '50%',
                            margin: '0 0 0 10',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        var store= Ext.getStore('store_gestion_cliente');
                                        var Existente=false;
                                        var idClient=null;
                                        var idForm=Ext.getCmp('frm_clientes').getRecord()?Ext.getCmp('frm_clientes').getRecord().id :null;
                                        store.each(function(record){
                                            if(value == record.data.documento){
                                                Existente=true;
                                                idClient=record.id;
                                            }
                                        });

                                        if ((!Ext.isEmpty(value)) && (Ext.isEmpty(value.trim()))) {
                                            return "El campo documento no admite espacios";
                                        }else if(value.length>50){
                                            return "El numero de documento supera el tamaño permitido (50)";
                                        }else if(!/^([0-9])*$/.test(value)){
                                            return "El documento debe ser  un número entero";
                                        }else if(Existente && idClient!=idForm){
                                            return "Ya existe un cliente con este documento";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'documento',
                                    width: '100%',
                                    label: 'Número de documento',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite el número de documento'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        if(value.length>100){
                                            return "El campo pais supera el tamaño permitido (100)";
                                        }else if(/^([0-9])*$/.test(value)){
                                            return "El campo pais tiene caracteres invalidos.(0-9)";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'pais',
                                    width: '100%',
                                    label: 'Pais',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un pais'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        if(value.length>100){
                                            return "La dirreción supera el tamaño permitido (100)";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'direccion',
                                    width: '100%',
                                    label: 'Dirección',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite una dirección'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        var store= Ext.getStore('store_gestion_cliente');
                                        var Existente=false;
                                        var idClient=null;
                                        var idForm=Ext.getCmp('frm_clientes').getRecord()?Ext.getCmp('frm_clientes').getRecord().id :null;
                                        store.each(function(record){
                                            if(value == record.data.correo){
                                                Existente=true;
                                                idClient=record.id;
                                            }
                                        });

                                        if ((!Ext.isEmpty(value)) && (Ext.isEmpty(value.trim()))) {
                                            return "El campo correo no admite espacios";
                                        }else if(value.length>100){
                                            return "El correo supera el tamaño permitido (100)";
                                        }else if(!/^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/.test(value)){
                                            return "Correo invalido.(demo@demo.com)";
                                        }else if(Existente && idClient!=idForm){
                                            return "Ya existe un cliente con este correo";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'correo',
                                    width: '100%',
                                    label: 'Correo',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un E-Mail'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    name: 'ctn_buttons_frm_client',
                    width: '100%',
                    padding: '10 0 0 0',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            hidden: true,
                            name: 'id',
                            label: 'Field'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {

                                var form = Ext.getCmp('frm_clientes');
                                var values = form.getValues();
                                var peticion;
                                if (form.validate()){
                                    if(form.getRecord()){
                                        var record = form.getRecord();
                                        record.set(values);
                                        Ext.Ajax.request({
                                            url: 'clienteController/actualizarCliente',
                                            method: 'POST',
                                            params: {
                                                id:values.id,
                                                tipoDocumento:values.tipoDocumento,
                                                documento:values.documento,
                                                nombre:values.nombre,
                                                pais:values.pais,
                                                ciudad:values.ciudad,
                                                direccion:values.direccion,
                                                telefono:values.telefono,
                                                correo:values.correo

                                            },
                                            success: function(response, opts) {
                                                Ext.getCmp('ctn_client_view').fn_find_client(null);
                                                Ext.getCmp('data_view_client').setStore('');
                                                Ext.ComponentQuery.query('[itemId=search_field_client]')[0].setValue('');
                                                Ext.getCmp('ctn_client_view').getViewModel().set('filtro',null);
                                                Ext.toast('Edición Exitosa', 1000);

                                            },
                                            failure: function(response, opts) {
                                                Ext.toast('Error al llevar a cabo el proceso', 1000);
                                            }
                                        });
                                        Ext.getCmp('vtn_generar_cliente').unmask();
                                        Ext.getCmp('vtn_generar_cliente').close();
                                    }else{
                                        form.submit({

                                            url: "clienteController/agregarCliente",
                                            waitMsg: 'espere',
                                            success: function(response, opts) {
                                                Ext.getStore('store_gestion_cliente').load();
                                                Ext.getCmp('grd_client').refresh();
                                                var info =Ext.getCmp('ctn_statistics_view').getViewModel().get('filtro');
                                                Ext.getCmp('ctn_statistics_view').fn_find_statistcs(info);
                                                Ext.toast('Creación Exitosa', 1000);

                                            },
                                            failure: function(response, opts) {
                                                Ext.toast('Error al llevar a cabo el proceso', 1000);
                                            }

                                        });
                                        Ext.getCmp('vtn_generar_cliente').unmask();
                                        Ext.getCmp('vtn_generar_cliente').close();

                                    }

                                }else{
                                    Ext.toast('Error al validar el formulario!', 1000);
                                }

                            },
                            cls: 'color-buttons',
                            height: 50,
                            id: 'btn_cliente',
                            ui: 'round',
                            width: 50,
                            iconCls: 'x-fa fa-check blackIcon'
                        }
                    ]
                }
            ]
        }
    ]

});