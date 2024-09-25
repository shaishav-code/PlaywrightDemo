exports.LoginPage = class LoginPage {

 constructor(page) {
    
    this.page = page;

    const abclass = new Abstact_class(page);

    this.waitforTestlogin = this.page.getByRole('heading', { name: 'Test login' });

    this.username_Textbox =  this.page.getByLabel('Username');
    // this.username_Textbox = "#username";

    this.passwordf_textbox = this.page.getByLabel('Password');

    // this.passwordf_textbox = "#password";

    this.login_button = this.page.getByRole("button", { name: "Submit" });
    // this.login_button = "#submit";

  }

  async GotoLoginPAge(){

    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async waitForVisibility() {
    await this.waitforTestlogin.waitFor({ state: 'visible' });
  }

  async loginPagedata(){

    // await this.username_Textbox.fill(username);
    // await this.waitforTestlogin.waitfor({ state:"visible"});
    await this.username_Textbox.fill('student')
    await this.passwordf_textbox.fill('Password123');
    await this.login_button.click();

}

async getByLabel(label) {
  const element = await this.page.$(`label:has-text("${label}")`);
  if (element) {
    const id = await element.getAttribute('for');
    return this.page.$(`#${id}`);
  }
  return null;
}


}
