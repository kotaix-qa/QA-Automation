import {Selector} from 'testcafe';

export class GooglePage {
    private readonly searchBar = Selector(".gLFyf");
    private readonly searchBttn = Selector(".FPdoLc > center:nth-child(1) > input:nth-child(1)").withText("Buscar con Google");
    private readonly resultsTotal = Selector("#rso");

}



