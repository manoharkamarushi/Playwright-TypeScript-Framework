import {test, expect} from '../../fixtures/testFixture';
import { UserRole } from '../../utils/auth/userRoles';

test('Champ user can login with valid credentials', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.loginAs('champuser'); // typed, safe
  await loginPage.verifyLoginSuccessful();
});
