/**
 * @author    Damien Dell'Amico <damien.dellamico@gmail.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidators } from '../../core/helpers/validators';

@Component({
  selector: 'signup-form',
  templateUrl: 'form.component.html'
})

export class SignUpFormComponent {

  @Output() onSignup = new EventEmitter();

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, FormValidators.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
}
