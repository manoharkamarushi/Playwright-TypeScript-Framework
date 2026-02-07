import {test} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

test('authenticate and save state - champuser', async({page})=>{
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.loginAs('champuser');
    await loginPage.verifyLoginSuccessful();

    await page.context().storageState({path:'champ.auth.json'});

});

test('authenticate and save state - poweruser', async({page})=>{
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.loginAs('champuser');
    await loginPage.verifyLoginSuccessful();

    await page.context().storageState({path:'power.auth.json'});

});
