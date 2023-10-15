import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {LogginPage} from '../POM/Loggin/Loggin.cy'
import {WorkspacePage} from '../POM/Board/WorkSpace.cy'
import {HealthCheckPage} from '../POM/HealthCheck/HealthCheck.cy';

const logginPage = new LogginPage();
const workspacePage = new WorkspacePage();
const healthCheckPage = new HealthCheckPage();

Given("A user enters to the login Page", () => {
  cy.visit("/");
});

When('A user enters the username {string} and password {string}',(username,password)=>{ 
   
    logginPage.loginInterface(username,password); 
})

When('A user creates workspace {string}',(WorkSpace)=>{ 
  const randomNum = Math.floor(Math.random() * 1000);
  workspacePage.workSpaceCreation(WorkSpace+String(randomNum));
    cy.wait(2000);
    
})

When('A user selects HealthCheck option',()=>{ 
  
  workspacePage.workSpaceHealthCheckSelection();
  cy.wait(2000);
})

When('A user Starts HealthCheck',()=>{ 

  healthCheckPage.ImprovementPlanComponent();
  cy.wait(2000);
  healthCheckPage.TakeYourFirstHealthCheck();
  cy.wait(2000);
  healthCheckPage.NextButtonClick();
  cy.wait(2000);
  healthCheckPage.NextButtonClick();
  cy.wait(2000);
  
})

When('A user completes Motives Screen from Health Check',()=>{ 

  healthCheckPage.movitesScreen();
  cy.wait(2000);

})

When('A user completes Thoughts Screen from Health Check',()=>{ 

  healthCheckPage.thoughtsScreen();
  cy.wait(2000);

})

When('A user completes Habits Screen from Health Check',()=>{ 

  healthCheckPage.habitsScreen();
  cy.wait(2000);

})

When('A user completes Ideas Screen from Health Check',()=>{ 

  healthCheckPage.ideasScreen();
  cy.wait(2000);

})

When('A user completes volunteers Screen from Health Check',()=>{ 

  healthCheckPage.volunteersScreen();
  cy.wait(2000);

})

When('A user completes Health Check flow',()=>{ 

  healthCheckPage.submitButton();
  cy.wait(2000);

})

When('A user Submit Health check',()=>{ 

  healthCheckPage.diagnosticSubmitted();
  cy.wait(2000);

})

When('A user starts report creation',()=>{ 

  healthCheckPage.creatingReportButton();
  cy.wait(2000);

})

When('A user starts report creation - Facilitator',()=>{ 

  healthCheckPage.creatingReportFacilitator();
  cy.wait(2000);

})

When('A user starts report creation - Inclusion',()=>{ 

  healthCheckPage.creatingReportInclusion();
  cy.wait(2000);

})

When('A user starts report creation - Finish',()=>{ 
 
  healthCheckPage.creatingReportFinish();
  cy.wait(2000);

})