import {Selector,t} from 'testcafe';
import {tottusRecetasPage} from '../Pages/tottusRecetasPage';


export class TottusPage {
    //LOCATORS
    private readonly storesFound = Selector(".title-category-section > h3:nth-child(1)");
    private readonly recetasYmas = Selector("#new_tottus_nav_cliente_recetas > a:nth-child(1) > img:nth-child(1)");
    
    //ACTIONS

async goToRecetasYmas() {
    await t.click(this.recetasYmas)
    return new tottusRecetasPage;
    

}

    //GETTERS
async getStoreFoundCount():Promise<string> {
    let getStoresFoundText = await this.storesFound.innerText;
    console.log(getStoresFoundText)
    return getStoresFoundText.trim();

}

}
    
