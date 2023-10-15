import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Chance from 'chance';

import {UserRegisterPage} from '../POM/UserRegister/UserRegisterPage.cy'
import {LogginPage} from '../POM/Loggin/Loggin.cy'
import {Administrator} from '../POM/Board/Administrator.cy'
import {OnboardingPage} from '../POM/Onboarding/OnboardingPage.cy'

Given("A user enters to the registration Page", () => {
    cy.visit('https://test414.staging.factor.work/register');
});

const userRegisterPage = new UserRegisterPage();
const logginPage = new LogginPage();
const administrator = new Administrator();
const onboardingPage = new OnboardingPage();

When('A new user registers in VegaFactor',()=>{ 

    const chance = new Chance();
    const fakeFirstName = chance.first();
    const fakeLastName = chance.last();
    const fakeUser = `${fakeFirstName}.${fakeLastName}@client.bar`;
    const password = 'secret'
    
    
    userRegisterPage.emailToRegister(fakeUser); 
    cy.log('The new user will be: '+fakeUser)

})

When('User log in as admin',()=>{ 
    const adminUser= 'admin@vegafactor.com'
    const password = 'secret'
    logginPage.loginInterface(adminUser, password); 
    cy.wait(2000);
    
})

When('Copy an invite link and open it',()=>{ 
  
 
    administrator.AdministratorSection();

    let linkValue;
    administrator.registrationLink().then((value) => {
      linkValue = value;
      //cy.log('Value returned is: ' + linkValue);
      cy.visit(linkValue);
    });

})

When('Onboarding Flow',()=>{ 
    const chance = new Chance();
    const fakeFirstName = chance.first();
    const fakeLastName = chance.last();
    const fakeUser = `${fakeFirstName}.${fakeLastName}@client.bar`;
    const password = 'secret'
 
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

})

