import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AccountCreation } from './pages/account-creation/account-creation';
import { TransferFunds } from './pages/transfer-funds/transfer-funds';
import { TransactionHistory } from './pages/transaction-history/transaction-history';
import { SharedModule } from './shared/shared-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Accounts } from './pages/accounts/accounts';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [App, AccountCreation, TransferFunds, TransactionHistory, Accounts],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    DatePipe
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
