import  {Selector} from 'testcafe';
import {TottusPage} from './tottusLocationPage'
import {t} from 'testcafe'

export class GooglePage {
  //LOCATORS  
    private readonly searchBar = Selector(".gLFyf");
    private readonly searchBttn = Selector(".FPdoLc > center:nth-child(1) > input:nth-child(1)").withText("Buscar con Google");
    private readonly resultsTotal = Selector("#rso");
    private readonly resultStoreLocations = Selector("#rso > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(3) > cite:nth-child(1) > span:nth-child(1)");
    
//ACTIONS
    async setSearchRequest(setSearchText){
        await t.typeText(this.searchBar, setSearchText)
        await t.pressKey("enter");
        
    };

    async goToTottusLocationPage(){
        await t.click(this.resultStoreLocations);
        return new TottusPage;

    };
        


};