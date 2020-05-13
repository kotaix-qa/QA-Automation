import {Selector,t} from 'testcafe';


export class TottusPage {
    private readonly storesFound = Selector(".title-category-section > h3:nth-child(1)");
    private readonly recetasYmas = Selector("#new_tottus_nav_cliente_recetas > a:nth-child(1) > img:nth-child(1)");
    

}
