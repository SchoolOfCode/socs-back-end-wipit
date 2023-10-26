import { test, expect } from "@playwright/test";
import { resetAllTables } from "../db/helpers.js";

// test("User flow for SOCS", async ({ page }) => {
//   await page.goto("http://localhost:5500/public");
//   await expect(
//     page.getByRole("heading", { name: "School of Code Stash" })
//   ).toBeVisible();
  //   await page.getByLabel("Name").fill("c4rm314");
  //   await expect(page.getByLabel("Name")).toHaveValue(/c4rm314/);
  //   await page
  //     .getByLabel("Tweet")
  //     .fill("Went to a fundraiser last night and it was lovely!");
  //   await expect(page.getByLabel("Tweet")).toHaveValue(
  //     /Went to a fundraiser last night and it was lovely!/
  //   );
  //   await page.getByRole("button", { name: /Send!/ }).click();
  //   await expect(page.getByLabel("Name")).toHaveValue("");
  //   await expect(page.getByLabel("Tweet")).toHaveValue("");
  //   await expect(
  //     page.getByText("c4rm314 Went to a fundraiser last night and it was lovely!")
//   //   ).toBeVisible();
// });

test("User flow for SOCS", async ({ page }) => {
  await page.goto("http://localhost:5500/public/");
  await expect(
    page.getByRole("heading", { name: "School of Code Stash" })
  ).toBeVisible();
  await page.getByRole("link", { name: " HOME" }).click();
  await page.getByRole("link", { name: "Resources by Week" }).click();  
  await page.getByRole("button", { name: "Week 1", exact: true }).click();
  await page.getByRole("button", { name: "Week 2" }).click();
  await page
    .locator("#screen1 div")
    .filter({ hasText: "Select the Week" })
    .getByRole("link")
    .click();
  await page.getByRole("link", { name: "Resources by Subject" }).click();
  await page.getByRole("button", { name: "CSS" }).click();
  await page.getByRole("button", { name: "HTML" }).click();
  await page.getByRole("button", { name: "Javascript" }).click();
  await page.locator("#select__topic").getByRole("link", { name: "" }).click();
});
