import { test, expect } from "@playwright/test";
import { resetAllTables } from "../db/helpers.js";

test.beforeEach(async () => {
  await resetAllTables();
});

test("User flow for SOCS", async ({ page }) => {
  //   await page.goto("http://localhost:5500");
  //   await expect(page.getByRole("heading", { name: "TestTer" })).toBeVisible();
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
  //   ).toBeVisible();
});
