import {Selector,t} from 'testcafe';
import {RollitosCanelaPage} from '../Pages/coronaRollitosCanelaPage'


export class tottusRecetasPage{
    //LOCATORS
    private readonly lowDifficulty = Selector("button.btnfilter:nth-child(2)");
    private readonly midDifficulty = Selector("button.btnfilter:nth-child(3)");
    private readonly highDifficulty = Selector("button.btnfilter:nth-child(4)");
    private readonly coronaDeRollitosCanela = Selector("div.row:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)");


    //ACTIONS

    async setHighDifficulty(){
        await t.click(this.highDifficulty)
    }

    async selectRollitosCanela(){
        await t.click(this.coronaDeRollitosCanela);
        return new RollitosCanelaPage();
    }

}; 

