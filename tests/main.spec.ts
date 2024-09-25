import { test, expect } from "@playwright/test";

import { login } from "./authentication/login";

require("dotenv").config();

const _username = process.env.APP_USERNAME!;
const _password = process.env.APP_PASSWORD!;

console.log("USERNAME: ", _username);
console.log("PASSWORD: ", _password);

test("test", async ({ page }) => {
  test.setTimeout(6000); // 6 seconds

  await page.goto("https://unapec.edu.do/", { waitUntil: "networkidle" });

  await page.getByLabel("Toggle navigation").click();
  await page.getByRole("link", { name: "UNAPEC Virtual" }).click();

  const page1Promise = page.waitForEvent("popup");

  await page.getByRole("link", { name: "Acceso para estudiantes y" }).click();

  test.setTimeout(6000);

  await login(page1Promise, _username, _password);

  test.setTimeout(6000);
});
