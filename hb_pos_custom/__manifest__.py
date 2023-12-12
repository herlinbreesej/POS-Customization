{
    'name': 'POS Customization',
    'version': '0.1',
    'category': 'Point of Sale',
    'author': 'Herlin Breese J',
    'summary': 'Customizations for the Point of Sale module',
    'description': """
        This module enables Customer Type and allows enabling/disabling the number pad based on the user.
    """,
    'depends': [
        'point_of_sale',
        'base',
    ],
    'data': [
        'views/view.xml',
        'views/pos.xml',
    ],
    'qweb': [
        'static/src/xml/partner.xml',
    ],
    'installable': True,
    'application': True,
}
