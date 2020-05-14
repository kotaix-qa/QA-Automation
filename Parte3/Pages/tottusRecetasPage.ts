import {Selector,t} from 'testcafe';
import {RollitosCanelaPage} from '../Pages/coronaRollitosCanelaPage'


export class tottusRecetasPage{
    //LOCATORS
    private readonly lowDifficulty = Selector('button').withText('BAJA')
    private readonly midDifficulty = Selector('button').withText('MEDIA')
    private readonly highDifficultyIE = Selector('#myDIV').find('button').withText('Alta')
    private readonly highDifficultyChrome = Selector('button').withText('ALTA')

    private readonly coronaDeRollitosCanela = Selector("div.row:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)");


    //ACTIONS

    async setHighDifficulty(){
        await t.wait(3000);
        if (await this.highDifficultyIE.exists && await this.highDifficultyIE.visible) {
            await t.click(this.highDifficultyIE);
       } else {
       
       if (await this.highDifficultyChrome.exists && await this.highDifficultyChrome.visible)
           await t.click(this.highDifficultyChrome);
       }
    }

    async selectRollitosCanela(){
        await t.click(this.coronaDeRollitosCanela);
        return new RollitosCanelaPage();
    }

}; 

