import HomePage from "../page-objects/main-page.js";
import { commandsData } from "../data/commands.js";

describe("Interview - Visuals verification", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("");
  });

  it("Verifies the placeholder behaviour", () => {
    HomePage.commandInput().should("not.have.attr", "placeholder");
    HomePage.commandInput().click();
    HomePage.commandInput().should("have.attr", "placeholder", "Ex. uname -a");
  });

  it("Verifies the error icon behaviour", () => {
    HomePage.verifyCommand("test", commandsData.output.not_supported);
    HomePage.errorIcon().should("be.visible");
  });
});
