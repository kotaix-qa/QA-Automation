import { GooglePage } from '../Pages/googlePage';
import { TottusPage } from '../Pages/tottusLocationPage';
import { tottusRecetasPage } from '../Pages/tottusRecetasPage'
import { RollitosCanelaPage} from '../Pages/coronaRollitosCanelaPage';


const GooglaCLWeb = "https://www.google.com";

fixture("Parte3 - Prueba Tecnica Falabella").page(GooglaCLWeb);
    test("Parte 3 - Prueba Tecnica", async t=>{
        await t.setTestSpeed(0.5);
        const google = new GooglePage();
        await google.setSearchRequest("Tottus Sucursales");
        await google.goToTottusLocationPage();
        const tottusLocation = new TottusPage();
        let tottusLocationPage = await tottusLocation.getStoreFoundCount();
        await t.expect(tottusLocationPage).contains("Tiendas encontradas");
        await tottusLocation.goToRecetasYmas();
        const recetasPage = new tottusRecetasPage();
        await recetasPage.setHighDifficulty();
        await recetasPage.selectRollitosCanela();
        let RollitosCanela = new RollitosCanelaPage();
        const getRecipeName = await RollitosCanela.getRecipeName();
        await t.expect(getRecipeName).eql("Corona de rollitos de canela");
        const getAzucarRubia = RollitosCanela.getAzucarRubia();
        await t.expect(getAzucarRubia).eql("– 125g azúcar rubia");
        const getCanela = await RollitosCanela.getCanela();
        await t.expect(getCanela).eql("– 15g canela en polvo");

    });

