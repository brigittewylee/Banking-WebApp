import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account-creation.type';
import { Transaction } from '../../model/transaction-history.type';
import { BankService } from '../../services/bank-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transaction-history',
  standalone: false,
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css',
})
export class TransactionHistory implements OnInit {
  accounts: Array<Account> = [];
  selectedAccountId: number = 0;
  transactions: Array<Transaction> = [];

  constructor(
    private bankService: BankService,
    private route: ActivatedRoute) {
  }

  listTransactions(selectedAccountId: number) {
    this.selectedAccountId = selectedAccountId;
    this.transactions = this.bankService.getTransactions(selectedAccountId);
  }

  displayedColumns: string[] = ['Date', 'Account', 'Amount']

  isWithdraw(transaction: Transaction): boolean {
    return transaction.withdrawAccountId === this.selectedAccountId;
  }

  getOtherAccount(transaction: Transaction): number {
    return transaction.withdrawAccountId === this.selectedAccountId
      ? transaction.depositAccountId
      : transaction.withdrawAccountId;
  }

  ngOnInit(): void {
    this.accounts = this.bankService.getAccounts()
    this.route.queryParams.subscribe(params => {
      if (params['accountId']) {
        const id = +params['accountId'];
        this.selectedAccountId = id;
        this.listTransactions(id);
      }
    })
  }
}
