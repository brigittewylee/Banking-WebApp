import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank-service';
import { Router } from '@angular/router';
import { Account } from '../../model/account-creation.type';
import { Transaction } from '../../model/transaction-history.type';

@Component({
  selector: 'app-accounts',
  standalone: false,
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts implements OnInit {
  accounts: Array<Account> = [];
  allTransactions: Array<Transaction> = []

  constructor(private bankService: BankService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accounts = this.bankService.getAccounts();
    this.allTransactions = this.bankService.getAllTransactions();
  }

  onClick() {
    this.router.navigate(['/create-account'])
  }

}
