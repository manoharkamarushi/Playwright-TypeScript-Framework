import {test, expect} from '@playwright/test';

test("User can login with valid credentials", async({page})=>{
    
    await page.goto('/');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    expect(page).toHaveURL(/inventory/);
});