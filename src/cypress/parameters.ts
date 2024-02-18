import { defineParameterType } from 'cypress-cucumber-preprocessor/steps';

// Defines the object parameter type for parsing an object JSON string in a step definition
defineParameterType({
  name: 'object',
  regexp: /\{.*\}/,
  transformer(s) {
    return JSON.parse(s);
  },
});
