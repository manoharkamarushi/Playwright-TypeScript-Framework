import {test, expect} from '../../fixtures/testFixture'

test("User can login with valid credentials", async({loginPage})=>{

    await loginPage.goto();
    await loginPage.loginwithEnvCrendentials();
    await loginPage.verifyLoginSuccessful();
});