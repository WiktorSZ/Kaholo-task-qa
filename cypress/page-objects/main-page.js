class HomePage {
  commandInput() {
    return cy.get("#mat-input-0");
  }
  executeButton() {
    return cy.get(".mat-button-wrapper").contains("Execute");
  }
  appTitle() {
    return cy.get("mat-card-title");
  }
  appStatus() {
    return cy.get("mat-card-subtitle");
  }
  appOutput() {
    return cy.get("mat-card pre");
  }
  exampleCommandsDiv() {
    return cy.get("div .examples");
  }
  placeHolderStorage() {
    return cy.get("#mat-form-field-label-1 mat-label");
  }
  errorIcon() {
    return cy.get("mat-card .mat-icon");
  }
  verifyCommand(command, text) {
    this.commandInput().type(command);
    this.executeButton().click();
    this.appOutput().contains(text).should("be.visible");
    this.commandInput().type("{selectall}{backspace}");
  }
}
export default new HomePage();
