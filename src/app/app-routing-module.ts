import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreation } from './pages/account-creation/account-creation';
import { TransferFunds } from './pages/transfer-funds/transfer-funds';
import { TransactionHistory } from './pages/transaction-history/transaction-history';
import { Accounts } from './pages/accounts/accounts';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts'
  },
  {
    path: 'accounts',
    component: Accounts
  },
  {
    path: 'create-account',
    component: AccountCreation
  },
  {
    path: 'transfer-funds',
    component: TransferFunds

  },
  {
    path: 'transaction-history',
    component: TransactionHistory
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
