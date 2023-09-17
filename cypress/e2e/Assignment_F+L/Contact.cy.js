
import contactpage from '../../../POM/contact.po'

import contactfixtures from '../../fixtures/contactPageData/contact.json'

const contact = new contactpage() 

describe('Validation of contact Page', () => {

    beforeEach(function(){
     cy.visit(contact.UrlLink())

    })

    it('Positive test case of contact page', () => {
      cy.clickonelement(contact.cookiespopInput())
      cy.enterText(contact.FirstNameInput(), contactfixtures.Firstname)
      cy.enterText(contact.LastNameInput(), contactfixtures.LastName)
      cy.enterText(contact.EmailIDInput(), contactfixtures.emailid)
      cy.enterText(contact.MobileNoInput(), contactfixtures.mobileNo)
      cy.selectDropDownValue(contact.ReferrelfieldInput(),"LinkedIn")
      cy.enterText(contact.Mesfield(), contactfixtures.textmesg)
      cy.clickonelement(contact.ButtonInput())
    })
    it('Negative test case of contact page', () => {
      cy.clickonelement(contact.cookiespopInput())
      cy.enterText(contact.FirstNameInput(), contactfixtures.Firstname)
      cy.enterText(contact.LastNameInput(), contactfixtures.LastName)
      cy.enterText(contact.EmailIDInput(), contactfixtures.emailid)
      cy.selectDropDownValue(contact.ReferrelfieldInput(),"LinkedIn")
      cy.enterText(contact.Mesfield(), contactfixtures.textmesg)
      cy.clickonelement(contact.ButtonInput())
      cy.containstextvisible("Please complete this required field.")
      })

})

  