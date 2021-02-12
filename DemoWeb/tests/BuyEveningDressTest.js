import HomeYourLogoPage from '../pages/HomeYourLogoPage'
import PrintedDressPage from '../pages/PrintedDressPage'
import PurchaseSummaryPage from '../pages/PurchaseSummaryPage'
import OrderPage from '../pages/OrderPage'

fixture `Comprar Vestido de Noche`;

test.page `http://automationpractice.com/index.php` 
('Seleccionar la seccion de vestidos nocturno', async t => {
    await t.maximizeWindow().hover(HomeYourLogoPage.dresses)
            .click(HomeYourLogoPage.eveningDreses)
                .expect(PrintedDressPage.titleEveningDreses.visible).ok()
                    .takeScreenshot();
});

test.page `http://automationpractice.com/index.php?id_category=10&controller=category`
('Agregar el vestido al carrito de compras', async t => {
    await t.expect(PrintedDressPage.titleEveningDreses.visible).ok()
    await t.hover(PrintedDressPage.printedDress).click(PrintedDressPage.addButton)
    await t.expect(PurchaseSummaryPage.title.visible).ok()
    await t.click(PurchaseSummaryPage.proceedChecout)
    await t.expect(OrderPage.title.visible).ok()
    await t.expect(OrderPage.cartQuantity.textContent).eql('1')
    await t.takeScreenshot()
});