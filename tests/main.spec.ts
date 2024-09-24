import { test, expect } from "@playwright/test";

import { login } from "./authentication/login";

require("dotenv").config();

const _username = process.env.APP_USERNAME!;
const _password = process.env.APP_PASSWORD!;

// Print the environment variables to check if they are loaded correctly
console.log("USERNAME: ", _username);
console.log("PASSWORD: ", _password);

test("test", async ({ page }) => {
  // Set a longer timeout for the test
  test.setTimeout(60000); // Set timeout to 60 seconds

  // Navigate to the page and wait until the network is idle
  await page.goto("https://unapec.edu.do/", { waitUntil: "networkidle" });

  // Perform interactions on the page
  await page.getByLabel("Toggle navigation").click();
  await page.getByRole("link", { name: "UNAPEC Virtual" }).click();

  // Wait for the popup to appear
  const page1Promise = page.waitForEvent("popup");

  // Interact with the next part of the page
  await page.getByRole("link", { name: "Acceso para estudiantes y" }).click();

  test.setTimeout(60000);

  // Perform login using username and password from environment variables
  await login(page1Promise, _username, _password);
});
