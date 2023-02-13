/// <reference types = "cypress"/>
describe('main page',() => {
it("select elements",() =>{
	cy.visit('/');
	cy.url().should('include',"https://demoqa.com/");
	cy.get('.category-cards >div:nth-child(1)').click();
	cy.get ('.main-header').should('have.text','Elements');
	cy.url().should('include','https://demoqa.com/elements');
	cy.get('div.row > div:nth-child(1) > div > div > div:nth-child(1) > div')
	  .should('have.class','element-list collapse show');
})
 it ('Text box', () => {
	cy.get('div[class = "element-list collapse show"]').as('menu')
	cy.get('@menu').find('#item-0').click()
 })



})