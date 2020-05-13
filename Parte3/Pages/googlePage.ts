import  {Selector} from 'testcafe';
import {t} from 'testcafe'

export class GooglePage {
    private readonly searchBar = Selector(".gLFyf");
    private readonly searchBttn = Selector(".FPdoLc > center:nth-child(1) > input:nth-child(1)").withText("Buscar con Google");
    private readonly resultsTotal = Selector("#rso");
    private readonly resultStoreLocations = Selector("div.rc:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(3) > cite:nth-child(1)");



    async  setSearchRequest(t, string:setSearch){
        await typetex
            

    };
}