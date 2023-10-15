import Chance from 'chance';

import {UserRegisterPage} from '../../POM/UserRegister/UserRegisterPage.cy'
import {LogginPage} from '../../POM/Loggin/Loggin.cy'
import {Administrator} from '../../POM/Board/Administrator.cy'
import {OnboardingExpressPage} from '../../POM/Onboarding/OnboardingExpressPage.cy'

describe('Express Onboarding', () => {
  before(() => {
    cy.visit('https://staging-vega3.tomo.guru/register');
  });

  const chance = new Chance();

  it('User Registration', () => {

    const logginPage = new LogginPage();
    const userRegisterPage = new UserRegisterPage();
    const administrator = new Administrator();
    const onboardingExpressPage = new OnboardingExpressPage();

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

    onboardingExpressPage.ExgetStarted();
    cy.wait(2000);
    onboardingExpressPage.ExsettingPassword(password);
    cy.wait(2000);
    onboardingExpressPage.ExsettingNames(fakeFirstName,fakeLastName);
    cy.wait(2000);
    onboardingExpressPage.ExworkPreferences();
    cy.wait(2000);
    onboardingExpressPage.ExenjoyYourPreferences();
    cy.wait(2000);
    onboardingExpressPage.ExprofessionPreferences();
    cy.wait(2000);
  })

})