import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInputComponent } from './components/error-input/error-input.component';
import { LocalMessagesDirective } from './directives/local-messages/local-messages.directive';
import { CommonErrorsComponent } from './components/all-error-messages/common-errors.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ErrorInputComponent,
    LocalMessagesDirective,
    CommonErrorsComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [ErrorInputComponent, LocalMessagesDirective, CommonErrorsComponent],
})
export class ErrorMessageModule {}
