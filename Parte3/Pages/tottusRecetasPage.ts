import {Selector,t} from 'testcafe';


export class tottusRecetasPage{

    private readonly lowDifficulty = Selector("button.btnfilter:nth-child(2)");
    private readonly midDifficulty = Selector("button.btnfilter:nth-child(3)");
    private readonly highDifficulty = Selector("button.btnfilter:nth-child(4)");
    private readonly coronaDeRollitosCanela = Selector("div.row:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)");

}; 

