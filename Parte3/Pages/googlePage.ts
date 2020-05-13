import  {Selector} from 'testcafe';
import {TottusPage} from './TottusStoreLocations'
import {t} from 'testcafe'

export class GooglePage {
  //LOCATORS  
    private readonly searchBar = Selector(".gLFyf");
    private readonly searchBttn = Selector(".FPdoLc > center:nth-child(1) > input:nth-child(1)").withText("Buscar con Google");
    private readonly resultsTotal = Selector("#rso");
    private readonly resultStoreLocations = Selector("div.rc:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(3) > cite:nth-child(1)");


//ACTIONS
    async  setSearchRequest(setSearchText){
        await t.typeText(this.searchBar, setSearchText)
        await t.click(this.searchBttn)
    };
        
            

    
};