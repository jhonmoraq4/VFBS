import Chance from 'chance';

import {UserRegisterPage} from '../../POM/UserRegister/UserRegisterPage.cy'
import {LogginPage} from '../../POM/Loggin/Loggin.cy'
import {Administrator} from '../../POM/Board/Administrator.cy'
import {OnboardingPage} from '../../POM/Onboarding/OnboardingPage.cy'

describe('POM implementation for User Registration', () => {
  before(() => {
    cy.visit('https://test414.staging.factor.work/register');
  });

  const chance = new Chance();

  it('User Registration', () => {

    const logginPage = new LogginPage();
    const userRegisterPage = new UserRegisterPage();
    const administrator = new Administrator();
    const onboardingPage = new OnboardingPage();

    const fakeFirstName = chance.first();
    const fakeLastName = chance.last();
    const fakeUser = `${fakeFirstName}.${fakeLastName}@client.bar`;
    const password = 'secret'
    const adminUser= 'admin@vegafactor.com'
    
    userRegisterPage.emailToRegister(fakeUser); 
    cy.log('The new user will be: '+fakeUser)
    cy.wait(2000);
    
    logginPage.loginInterface(adminUser, password); 
    cy.wait(2000);

    administrator.AdministratorSection();

    let linkValue;
    administrator.registrationLink().then((value) => {
      linkValue = value;
      //cy.log('Value returned is: ' + linkValue);
      cy.visit(linkValue);
    });
  
    onboardingPage.getStarted();
    cy.wait(2000);
    onboardingPage.settingPassword(password);
    cy.wait(2000);
    onboardingPage.settingNames(fakeFirstName,fakeLastName);
    cy.wait(2000);
    onboardingPage.workPreferences();
    cy.wait(2000);
    onboardingPage.enjoyYourPreferences();
    cy.wait(2000);
    onboardingPage.factorAIReport();
    cy.wait(2000);
    // OnboardingPage.personalMotivationReport();
    // cy.wait(2000);
    // OnboardingPage.inviteFriendOptional();
    // cy.wait(2000);
   });

});