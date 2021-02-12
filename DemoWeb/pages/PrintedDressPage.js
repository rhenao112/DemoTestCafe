import { Selector as $, t } from 'testcafe'

const PrintedDressPage = {

    titleEveningDreses : $('#center_column > h1 > span.cat-name'),
    printedDress: $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img'),
    addButton : $('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default')
}

export default {...PrintedDressPage}