import { Injectable } from '@angular/core';
import { Account } from '../model/account-creation.type';
import { Transaction } from '../model/transaction-history.type';

@Injectable({
  providedIn: 'root',
})

export class BankService {
  accounts: Array<Account> = [
    {
      accountId: 1111111111,
      name: 'Alice',
      balance: 1000,
      accountType: 'chequing'
    },
    {
      accountId: 2222222222,
      name: 'Bob',
      balance: 1234.56,
      accountType: 'savings'
    },
        {
      accountId: 333333333,
      name: 'Carol',
      balance: 23432432,
      accountType: 'chequing'
    },
    {
      accountId: 444444444,
      name: 'Dave',
      balance: 0.3,
      accountType: 'savings'
    },
    {
      accountId: 555555555,
      name: 'Eve',
      balance: 12,
      accountType: 'savings'
    },
  ];
  transactions: Array<Transaction> = [
    {
      transactionId: 1,
      transactionDescription: 'cake',
      withdrawAccountId: 333333333,
      depositAccountId: 555555555,
      timestamp: new Date(),
      amount: 10,
    },
    {
      transactionId: 2,
      transactionDescription: 'tea',
      withdrawAccountId: 333333333,
      depositAccountId: 1111111111,
      timestamp: new Date(),
      amount: 10,
    },
        {
      transactionId: 3,
      transactionDescription: 'apple',
      withdrawAccountId: 2222222222,
      depositAccountId: 333333333,
      timestamp: new Date(),
      amount: 20,
    },
    {
      transactionId: 4,
      transactionDescription: 'water',
      withdrawAccountId: 444444444,
      depositAccountId: 333333333,
      timestamp: new Date(),
      amount: 20,
    },
    {
      transactionId: 5,
      transactionDescription: 'potato',
      withdrawAccountId: 444444444,
      depositAccountId: 2222222222,
      timestamp: new Date(),
      amount: 10,
    },
    {
      transactionId: 6,
      transactionDescription: 'tea',
      withdrawAccountId: 333333333,
      depositAccountId: 1111111111,
      timestamp: new Date(),
      amount: 10,
    },
        {
      transactionId: 7,
      transactionDescription: 'apple',
      withdrawAccountId: 2222222222,
      depositAccountId: 444444444,
      timestamp: new Date(),
      amount: 20,
    },
    {
      transactionId: 8,
      transactionDescription: 'water',
      withdrawAccountId: 444444444,
      depositAccountId: 1111111111,
      timestamp: new Date(),
      amount: 20,
    },
    {
      transactionId: 9,
      transactionDescription: 'potato',
      withdrawAccountId: 333333333,
      depositAccountId: 1111111111,
      timestamp: new Date(),
      amount: 10,
    },
  ];

  createAccount(name: string, accountType: 'chequing' | 'savings', balance: number) {
    this.accounts.push({
      accountId: Date.now(),
      name,
      balance,
      accountType
    })
  }

  transferFunds(withdrawAccountId: number, depositAccountId: number, amount: number,) {
    const withdrawalAccount = this.accounts.find(a => a.accountId === withdrawAccountId)
    const depositAccount = this.accounts.find(a => a.accountId === depositAccountId)

    if (!withdrawalAccount || !depositAccount) return;
    if (amount > withdrawalAccount.balance) return;

    withdrawalAccount.balance -= amount;
    depositAccount.balance += amount;

    this.transactions.unshift({
      transactionId: Date.now(),
      transactionDescription: null,
      withdrawAccountId,
      depositAccountId,
      timestamp: new Date(),
      amount
    })
  }

  getAccounts(): Array<Account> {
    return this.accounts;
  }

  getTransactions(accountId: number): Array<Transaction> {
    return this.transactions.filter(
      t => t.withdrawAccountId === accountId || t.depositAccountId === accountId
    );
  }

  getAllTransactions():Array<Transaction> {
    return this.transactions
  }
}
