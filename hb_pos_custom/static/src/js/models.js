odoo.define('hb_pos_custom.models', function(require) {
    "use strict";

    var models = require('point_of_sale.models');
    models.load_fields("res.partner", ['customer_type']);

    var obj 
    self.customer_type = [
        {value:'potential', values: 'Potential'},
        {value:'value', values: 'Value'},
        {value:'impulse', values: 'Impulse'},

    ];


    var posmodel_super = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({
        get_customer_type: function(customer_type_value){
            console.log("# get_customer_type >>> ");
            console.log("# customer_type_value >>> ",customer_type_value);

            var customer_type = {
                    'potential': 'Potential',
                    'value': 'Value',
                    'impulse': 'Impulse',

                };
            return customer_type[customer_type_value];
        },
    });

    var _super_order = models.Order.prototype;
    models.Order = models.Order.extend({
        initialize: function() {
            _super_order.initialize.apply(this, arguments);
            if (this.pos.config.default_partner_id) {
            	this.set_client(this.pos.db.get_partner_by_id(this.pos.config.default_partner_id[0]));
            }
        },
        
    });
});