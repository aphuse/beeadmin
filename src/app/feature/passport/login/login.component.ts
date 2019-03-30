import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private fb:FormBuilder) {
        this.loginForm = fb.group({
            name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    get name() {
        return this.loginForm.controls.name;
    }

    get password() {
        return this.loginForm.controls.password;
    }

    login() {

    }
}