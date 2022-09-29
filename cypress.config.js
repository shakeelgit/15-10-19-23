const { defineConfig } = require("cypress");
//const { default: preprocessor } = require("cypress-cucumber-preprocessor");
const cucumber = require('cypress-cucumber-preprocessor').default
    

module.exports = defineConfig({
  projectId: 'hjsj72',
  reporter : "mochawesome",
    report : "/path-from-root-to/node_modules/cypress-mochawesome-reporter",
  
  //projectId: 'cciioe',
   //projectId: 'r2z3js',
    // projectId: 'xtb28a',
    chromeWebSecurity: true,
    pageLoadTimeout : 60000,
    
    
    
     peojectId: 'i3s8ni',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber()) 
      
    },
  
     specPattern:'cypress/integration/*.js',
     //specPattern:'cypress/integration/BDD/*.feature'

  },


 
});
