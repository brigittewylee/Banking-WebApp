import { Component, input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BankService } from '../../services/bank-service';
import { Router } from '@angular/router';
import { Account } from '../../model/account-creation.type';

@Component({
  selector: 'app-transfer-funds',
  standalone: false,
  templateUrl: './transfer-funds.html',
  styleUrl: './transfer-funds.css',
})
export class TransferFunds implements OnInit {

  transferForm!: FormGroup;
  selectedAccounts!: string
  accounts: Array<Account> = [];

  constructor(
    private fb: FormBuilder,
    private bankService: BankService,
    private router: Router) {
  }

  onSubmit() {
    if (this.transferForm.valid) {
      const { withdrawId, depositId, amount } = this.transferForm.value
      this.bankService.transferFunds(withdrawId, depositId, amount)
      this.router.navigate(['/transaction-history'])
    }
  }

  ngOnInit() {
    this.accounts = this.bankService.getAccounts();
    console.log('accounts:', this.accounts)

    this.transferForm = this.fb.group({
      withdrawId: ['', Validators.required],
      depositId: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01), this.amountValidator]]
    })
  }

  amountValidator = (control: AbstractControl): ValidationErrors | null => {
    const withdrawAcc = this.accounts.find(a => a.accountId === this.transferForm?.value.withdrawId)
    if (!withdrawAcc) {
      return null
    }
    if (withdrawAcc.balance < control.value) {
      return (
        { exceedsBalance: true }
      )
    }
    return null
  }

  limitDecimals(event: any) {
    this.transferForm.get('amount')?.markAsTouched();
    const value = event.target.value;
    if (value.includes('.')) {
      const parts = value.split('.');
      if (parts[1].length > 2) {
        event.target.value = parseFloat(value).toFixed(2);
        this.transferForm.get('amount')?.setValue(parseFloat(event.target.value));
      }
    }
  }
}
