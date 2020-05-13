import { GooglePage } from '../Pages/googlePage';
import { TottusPage } from '../Pages/tottusLocationPage';
import { tottusRecetasPage } from '../Pages/tottusRecetasPage'
import { t } from 'testcafe';

const GooglaCLWeb = "https://www.google.com";

fixture("Parte3 - Prueba Tecnica Falabella").page(GooglaCLWeb);
    test("Parte 3 - Prueba Tecnica", async t=>{
        await t.setTestSpeed(0.7);
        const google = new GooglePage();
        await google.setSearchRequest("Tottus Sucursales");
        await google.goToTottusLocationPage();
        const tottusLocation = new TottusPage();
        let tottusLocationPage = await tottusLocation.getStoreFoundCount();
        await t.expect(tottusLocationPage).contains("Tiendas encontradas");

    });

