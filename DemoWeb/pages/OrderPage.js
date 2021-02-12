import { Selector as $, t } from 'testcafe'

const OrderPage = {

    title : $('#cart_title'),
    cartQuantity: $('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > span.ajax_cart_quantity')
    
}

export default {...OrderPage}