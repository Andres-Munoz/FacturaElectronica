/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'model_gestion_cliente',
        'model_gestion_producto',
        'model_gestion_empresa',
        'model_gestion_factura',
        'model_facturas',
        'model_info_count',
        'model_gestion_usuarios'
    ],
    stores: [
        'store_gestion_cliente',
        'store_gestion_producto',
        'store_gestion_factura',
        'store_gestion_empresa',
        'store_gestion_all_factura',
        'store_factura_productos',
        'store_gestion_all_producto_factura',
        'store_gestion_producto_factura',
        'store_info_count',
        'store_gestion_usuarios'
    ],
    views: [
        'vtn_generar_producto',
        'tbp_menu',
        'vtn_generar_cliente',
        'vtn_generar_empresa',
        'grd_client',
        'grd_company',
        'grd_invoice',
        'ctn_invoice_view',
        'ctn_product_view',
        'ctn_client_view',
        'ctn_company_view',
        'ctn_statistics_view',
        'vtn_generar_factura',
        'vtn_seleccionar_detalle_factura',
        'ctn_account',
        'ctn_user_view',
        'grd_user',
        'vtn_generar_usuario'
    ],
    name: 'facturaElecWeb',

    requires: [
        'Ext.Toast'
    ],

    init: function() {
        window.filtro = 0;
        window.oldFactura=[];
    },

    launch: function() {
        Ext.create('facturaElecWeb.view.tbp_menu', {fullscreen: true});
    }

});
