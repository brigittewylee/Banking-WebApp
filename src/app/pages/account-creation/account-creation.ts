import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../model/account-creation.type';

@Component({
  selector: 'app-account-creation',
  standalone: false,
  templateUrl: './account-creation.html',
  styleUrl: './account-creation.css',
})
export class AccountCreation implements OnInit {

  accountForm!: FormGroup;
  accounts: Array<Account> = []

  constructor(private fb: FormBuilder,
    private bankService: BankService,
    private router: Router) {
    this.accountForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3),
      Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9]*$')]],
      balance: [null, [Validators.required, Validators.min(0.01)]],
      accountType: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.accountForm.valid)
    if (this.accountForm.valid) {
      const { name, accountType, balance } = this.accountForm.value
      this.bankService.createAccount(name, accountType, balance)
      this.router.navigate(['/accounts'])
    }
  }

  limitDecimals(event: any) {
    this.accountForm.get('balance')?.markAsTouched();
    const value = event.target.value;
    if (value.includes('.')) {
      const parts = value.split('.');
      if (parts[1].length > 2) {
        event.target.value = parseFloat(value).toFixed(2);
        this.accountForm.get('balance')?.setValue(parseFloat(event.target.value));
      }
    }
  }

  ngOnInit() {
    this.accounts = this.bankService.getAccounts();
  }
}
