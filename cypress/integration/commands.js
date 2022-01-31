import HomePage from "../page-objects/main-page.js";
import { commandsData } from "../data/commands.js";

describe("Interview - Commands verification", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("");
  });

  it("Verifies different commands and its output", () => {
    HomePage.verifyCommand(
      commandsData.commands.uname,
      commandsData.output.uname
    );
    HomePage.verifyCommand(
      commandsData.commands.uname_a,
      commandsData.output.uname_a
    );
    HomePage.verifyCommand(commandsData.commands.ls, commandsData.output.ls);
    HomePage.verifyCommand(
      commandsData.commands.echo,
      commandsData.output.echo
    );
    HomePage.verifyCommand(commandsData.commands.cat, commandsData.output.cat);
    HomePage.verifyCommand("test", commandsData.output.not_supported);
    HomePage.verifyCommand("{backspace}", commandsData.output.no_command);
  });

  it("Verifies the case where commands are with additional space", () => {
    HomePage.verifyCommand(
      " " + commandsData.commands.uname,
      commandsData.output.not_supported
    );
    HomePage.verifyCommand(
      commandsData.commands.cat + " ",
      commandsData.output.not_supported
    );
  });

  it.only("Verifies the case where commands are with additional signs", () => {
    HomePage.verifyCommand("uname -a -", commandsData.output.not_supported);
    HomePage.verifyCommand("ls --al", commandsData.output.not_supported);
    HomePage.verifyCommand("-echo kapusta", commandsData.output.not_supported);
  });

  it("Verifies if commands are case sensitive", () => {
    HomePage.verifyCommand("Uname b", commandsData.output.not_supported);
    HomePage.verifyCommand("ls -Ar", commandsData.output.not_supported);
    HomePage.verifyCommand(
      "Cat package.json",
      commandsData.output.not_supported
    );
  });

  it("Verifies the case where commands are with different values", () => {
    HomePage.verifyCommand("uname b", commandsData.output.not_supported);
    HomePage.verifyCommand("ls -ar", commandsData.output.not_supported);
    HomePage.verifyCommand(
      "cat package.json",
      commandsData.output.not_supported
    );
  });
});
