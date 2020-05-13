import { GooglePage } from '../Pages/googlePage';
import { TottusPage } from '../Pages/tottusLocationPage';
import { t } from 'testcafe';

const GooglaCLWeb = "https://www.google.com";

fixture("Parte3 - Prueba Tecnica Falabella").page(GooglaCLWeb);
    test("Google Search: Sucursales Tottus", async t=>{
        let google = new GooglePage
        await google.setSearchRequest("Tottus Sucursales");

    test("Select TottusLocations at Results", async t =>{
        let google = new GooglePage();
        google.goToTottusLocationPage
        let tottusLocation = new TottusPage();
        const getLocations = tottusLocation.getStoreFoundCount
        await t.expect(getLocations).contains("asd");

    

         
        })


    
  

    });


