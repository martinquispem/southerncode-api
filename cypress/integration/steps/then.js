

import { Then } from "cypress-cucumber-preprocessor/steps";
import utils from '../utils/utils'

Then('It will show a list of all images', () => {
    const resp = Cypress.env('results').RelatedTopics
    const list = utils.getAllImages(resp)
    list.forEach(e => {
        cy.log(e)
        cy.task('log', e)
    })    
})

Then('It will show a list of all urls', () => {
    const resp = Cypress.env('results')
    const list = utils.getAllUrls(resp)
    list.forEach(e => {
        cy.log(e)
        cy.task('log', e)
    })
})
