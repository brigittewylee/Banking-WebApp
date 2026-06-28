import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/button/button';
import { MatAnchor } from "@angular/material/button";

@NgModule({
  declarations: [Button],
  imports: [CommonModule, MatAnchor],
  exports: [Button]
})
export class SharedModule {}
