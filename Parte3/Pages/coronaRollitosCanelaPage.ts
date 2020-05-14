import {Selector,t} from 'testcafe'



export class RollitosCanelaPage {
    //LOCATORS
    private readonly recipeName = Selector("#hero > div > div > div.headerName > table > tbody > tr > td:nth-child(1) > strong > h1 > p");
    private readonly recipeDifficulty = Selector ("#hero > div > div > div.headerName > table > tbody > tr > td:nth-child(2) > div");
    private readonly azucarRubia = Selector ("#hero > div > div > div:nth-child(3) > div.headerDivRecipe > div.divRecipe > p:nth-child(4)");
    private readonly canelaEnPolvo = Selector ("#hero > div > div > div:nth-child(3) > div.headerDivRecipe > div.divRecipe > p:nth-child(5)");


    //ACTIONS



    //GETTERS
    async getRecipeName():Promise<String>{
        let getRecipe = await this.recipeName.innerText;
        return getRecipe.trim()

    }

    async getRecipeDifficulty():Promise<String>{
        let getRecipeDifficulty = await this.recipeDifficulty.innerText;
        return getRecipeDifficulty.trim()
    }

    async getAzucarRubia():Promise<String>{
        let getAzucarRubia = await this.azucarRubia.innerText
        return getAzucarRubia.trim();
        
    }

    async getCanela():Promise<String> {
        let getCanela = await this.canelaEnPolvo.innerText
        return getCanela.trim()
    }


}