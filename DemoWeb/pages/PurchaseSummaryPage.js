import { Selector as $, t } from 'testcafe'

const PurchaseSummaryPage = {

    title : $('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2'),
    proceedChecout: $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a')
    
}

export default {...PurchaseSummaryPage}