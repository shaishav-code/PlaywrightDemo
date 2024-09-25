exports.LoginClass = class LoginClass{


    constructor(page) {
    
        this.page = page;

        this.username_Textbox =  this.page.getByLabel('Username');
        this.passwordf_textbox = this.page.getByLabel('Password');
        this.login_button = this.page.getByRole("button", { name: "Submit" });
    }


    async loginpagedata(){

        await this.username_Textbox.fill('student');
        await this.passwordf_textbox.fill('Password123');
    }

    async SubmitButton(){

        await this.login_button.click();
    }

    async Username(){

        await this.username_Textbox.fill('username');
    }

    async password(){

        await this.passwordf_textbox.fill('password');
    }
}