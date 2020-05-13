import { GooglePage } from '../Pages/googlePage';
import { TottusPage } from '../Pages/TottusLocationPage';
import { t } from 'testcafe';

const GooglaCLWeb = "https://www.google.com";

fixture("Parte3 - Prueba Tecnica Falabella").page(GooglaCLWeb);
test("Google Search: Sucursales Tottus", async t=>{
let startBrowser = new GooglePage
await startBrowser.setSearchRequest("Tottus Sucursales");

});