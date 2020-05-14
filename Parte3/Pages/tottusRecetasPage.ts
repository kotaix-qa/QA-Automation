import {Selector,t} from 'testcafe';
import {RollitosCanelaPage} from '../Pages/coronaRollitosCanelaPage'


export class tottusRecetasPage{
    //LOCATORS
    private readonly lowDifficulty = Selector('button').withText('BAJA')
    private readonly midDifficulty = Selector('button').withText('MEDIA')
    private readonly highDifficulty = Selector('button').withText('ALTA')
    private readonly coronaDeRollitosCanela = Selector("div.row:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)");


    //ACTIONS

    async setHighDifficulty(){
        await t.wait(3);
        await t.click(this.highDifficulty)
    }

    async selectRollitosCanela(){
        await t.click(this.coronaDeRollitosCanela);
        return new RollitosCanelaPage();
    }

}; 

