import { Selector as $, t } from 'testcafe'

const HomeYourLogoPage = {

    dresses : $('#block_top_menu > ul > li:nth-child(2) > a'),
    eveningDreses: $('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')
    
}

export default {...HomeYourLogoPage}