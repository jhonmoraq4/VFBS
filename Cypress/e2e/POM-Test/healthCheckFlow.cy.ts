import {LogginPage} from '../../POM/Loggin/Loggin.cy';
import {BoardPage} from '../../POM/Board/Board.cy';
import {WorkspacePage} from '../../POM/Board/WorkSpace.cy';
import {HealthCheckPage} from '../../POM/HealthCheck/HealthCheck.cy';


describe('POM implementation', () => {
  before(() => {
    cy.visit('https://test414.staging.factor.work/login');
  });

  it('HealthCheck test', () => {
    const logginPage = new LogginPage();
    const boardPage = new BoardPage();
    const workspacePage = new WorkspacePage();
    const healthCheckPage = new HealthCheckPage();

    logginPage.loginInterface('edith.richards@client.bar', 'secret');
    cy.wait(2000);
    boardPage.WorkSpaceTitle().should('have.text', 'My workspaces');
    cy.wait(2000);
    const randomNum = Math.floor(Math.random() * 1000);
    workspacePage.workSpaceCreation('TestWS'+randomNum);
    cy.wait(3000);
    workspacePage.workSpaceHealthCheckSelection();
    cy.wait(3000);
    healthCheckPage.ImprovementPlanComponent();
    cy.wait(3000);
    healthCheckPage.TakeYourFirstHealthCheck();
    cy.wait(2000);
    healthCheckPage.NextButtonClick();
    cy.wait(2000);
    healthCheckPage.NextButtonClick();
    cy.wait(2000);
    healthCheckPage.movitesScreen();
    cy.wait(2000);
    healthCheckPage.thoughtsScreen();
    cy.wait(2000);
    healthCheckPage.habitsScreen();
    cy.wait(2000);
    healthCheckPage.ideasScreen();
    cy.wait(2000);
    healthCheckPage.volunteersScreen();
    cy.wait(2000);
    healthCheckPage.submitButton();
    cy.wait(2000)
    healthCheckPage.diagnosticSubmitted();
    cy.wait(2000)
    healthCheckPage.creatingReportButton();
    cy.wait(2000);
    healthCheckPage.creatingReportFacilitator();
    cy.wait(2000);
    healthCheckPage.creatingReportInclusion();
    cy.wait(2000);
    healthCheckPage.creatingReportFinish();
    cy.wait(2000);
    //healthCheckPage.healthCheckReportFinishedTitle().should('have.text', 'Health Check report');

  });

});
