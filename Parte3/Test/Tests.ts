import { GooglePage } from '../Pages/googlePage';
import { TottusPage } from '../Pages/tottusLocationPage';
import { t } from 'testcafe';

const GooglaCLWeb = "https://www.google.com";

fixture("Parte3 - Prueba Tecnica Falabella").page(GooglaCLWeb);
    test("Google Search: Sucursales Tottus", async t=>{
        let Browser = new GooglePage
        await Browser.setSearchRequest("Tottus Sucursales");

    test("Select TottusLocations at Results", async t =>{
        let Browser = new GooglePage
        Browser.goToTottusLocationPage
        

         
        })


    
  

    });


