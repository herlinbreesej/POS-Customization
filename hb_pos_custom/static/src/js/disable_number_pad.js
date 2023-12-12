odoo.define('hb_pos_custom.disable_number_pad', function (require) {
    'use strict';

    var rpc = require('web.rpc');
    var screens = require('point_of_sale.screens');

    screens.PaymentScreenWidget.include({
        show: function () {
          this._super.apply(this, arguments);
            var self = this;
            this._rpc({
                model: 'res.users',
                method: 'update_disable_number_pad',
                args: [{}],
            }).then(function (result) {
                if (result == true) {
                    self.$('.numpad').addClass('disabled');
                    self.$('.numpad button').prop('disabled', true);
                }
            }).catch(function (error) {
                console.error("Error in PaymentScreenWidget RPC call:", error);
            });
        },
    });

    screens.ProductScreenWidget.include({
        show: function () {
            this._super.apply(this, arguments);
            var self = this;
            this._rpc({
                model: 'res.users',
                method: 'update_disable_number_pad',
                args: [{}],
            }).then(function (result) {
                if (result == true) {
                    self.$('.numpad').addClass('disabled');
                    self.$('.numpad button').prop('disabled', true);
                }
            }).catch(function (error) {
                console.error("Error in ProductScreenWidget RPC call:", error);
            });
        },
    });


});
