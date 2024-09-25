import { Page } from "@playwright/test";

// Esta función puede ser reutilizada en varias pruebas
export async function login(
  page1Promise: Promise<Page>,
  username: string,
  password: string
) {
  const page1 = await page1Promise;
  await page1.getByPlaceholder("Email, phone, or Skype").click();
  await page1.getByPlaceholder("Email, phone, or Skype").fill(username);
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.getByPlaceholder("Password").click();
  await page1.getByPlaceholder("Password").fill(password);
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();

  await page1.waitForTimeout(8000);
}
