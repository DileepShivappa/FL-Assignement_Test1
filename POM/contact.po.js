class contactpage{

    UrlLink(){

        return 'https://www.founderandlightning.com/contact'
    }

    cookiespopInput(){

        return 'button[id="hs-eu-confirmation-button"]'
    }

  FirstNameInput(){

    return 'input[name="firstname"]'
  }

  LastNameInput(){

    return 'input[name="lastname"]'
  }

  EmailIDInput(){

    return 'input[name="email"]'
  }

  MobileNoInput(){

    return 'input[name="mobilephone"]'
  }

  ReferrelfieldInput(){

    return 'select[name="how_did_you_hear_about_us_"]'
  }
  Mesfield(){

    return 'textarea[name="message"]'
  }

  ButtonInput(){

    return 'input[type="submit"]'
  }


}
export default contactpage