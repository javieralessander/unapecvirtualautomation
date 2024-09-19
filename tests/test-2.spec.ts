import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //Agrega tus credenciales de acceso a UNAPEC Virtual
  const email = "";
  const password = ``;

  await page.goto("https://unapec.edu.do/");
  await page.getByLabel("Toggle navigation").click();
  await page.getByRole("link", { name: "UNAPEC Virtual" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Acceso para estudiantes y" }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder("Email, phone, or Skype").click();
  await page1.getByPlaceholder("Email, phone, or Skype").fill(email);
  await page1.getByRole("button", { name: "Next" }).click();
  await page1.getByPlaceholder("Password").click();
  await page1.getByPlaceholder("Password").fill(password);
  await page1.getByRole("button", { name: "Sign in" }).click();
  await page1.getByRole("button", { name: "Yes" }).click();

  await page1.waitForTimeout(2000);
});
