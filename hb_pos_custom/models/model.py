import logging

from odoo import models, fields, api, _
from odoo.exceptions import UserError

_logger = logging.getLogger(__name__)


class ResParterPOS(models.Model):
    _inherit = 'res.partner'

    customer_type = fields.Selection([('potential', 'Potential'), ('value', 'Value'), ('impulse', 'Impulse')],
                                     store=True,
                                     String='Customer Type')


class ResUsersinh(models.Model):
    _inherit = 'res.users'

    def update_disable_number_pad(self):
        user_groups = self.env.user.groups_id
        idd = self.env['ir.model.data'].sudo().get_object_reference('hb_pos_custom', 'group_disable_number_pad_user')
        if idd and idd[1]:
            g_id = idd[1]
        else:
            g_id = False
        g = self.env['res.groups'].browse(g_id)
        is_enabled = g_id and g_id in user_groups.ids
        print(is_enabled)
        return is_enabled



