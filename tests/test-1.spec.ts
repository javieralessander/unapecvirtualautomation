import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.google.com/search?q=unapec&oq=unapec&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDMwNzNqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8"
  );
  await page.getByRole("link", { name: "Universidad APEC - UNAPEC" }).click();
  await page
    .getByRole("banner")
    .locator("ul")
    .getByRole("link", { name: "Admisiones" })
    .click();
  await page.getByRole("link", { name: "Ofertas académicas" }).click();
  await page
    .getByRole("link", { name: "Ofertas de posgrado", exact: true })
    .click();
  await page.getByRole("link", { name: "Información Financiera" }).click();
  await page.getByRole("link", { name: "Fundapec", exact: true }).click();
  await page
    .getByRole("link", { name: "Universidades Internacionales" })
    .click();
});
