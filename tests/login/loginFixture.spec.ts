import { test, expect } from '../../fixtures/testFixture';

test.describe('@smoke @login @p1 @ui', () => {
  test('Champ user can login with valid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.loginAs('champuser'); // typed, safe
    await loginPage.verifyLoginSuccessful();
  });

});
