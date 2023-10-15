export class OnboardingExpressPage {

    ExgetStarted() {
        cy.get('button[vf-button][label="Get started"]').click();
    }

    ExsettingPassword(pass){
        cy.get('#vf-new-password').type(pass);
        cy.get('#vf-confirm-password').type(pass);
        cy.get('button.vf-button:nth-child(2)').click();
    }
    
    ExsettingNames(name,lastName){
        cy.get('[data-placeholder="First name (required)"]').type(name);
        //cy.get('#mat-input-3').type('Smith');
        cy.get('[data-placeholder="Last name (required)"]').type(lastName);
        //cy.get('#mat-input-4').type('1');

        //cy.get('#mat-slide-toggle-1').click() //Light Mode slider
        cy.contains('button','Next').click();
        cy.contains('button','Next').click();
        cy.contains('button','Next').click();
    }

    ExworkPreferences(){
        cy.contains('button','Generate randomly').click(); //first click to generate randomly
        cy.contains('button','Generate randomly').click(); //second click to generate randomly
        cy.contains('button','Next').click();
        cy.wait(2000)
    }

    ExenjoyYourPreferences(){

        //cy.contains('vf-listbox-item','(explorer, achiever)').click();
        cy.get('vf-listbox-item[id="cdk-option-2"]').click();
        cy.get('vf-listbox-item[id="cdk-option-4"]').click();
        // cy.contains('vf-listbox-item','(galvanizer, achiever)').click();
        cy.contains('button','Next').click();
        cy.wait(4000)
    }

    ExprofessionPreferences(){
        cy.contains('[dd-action-name="DD: AI stepper - Select Function: Quality"]', 'Quality').click();
        cy.contains('button','Next').click();
        cy.contains('button','Next').click();
    }

}
//module.exports = new OnboardingExpressPage();