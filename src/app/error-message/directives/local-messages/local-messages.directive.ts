import { Directive, HostListener, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Directive({
  selector: '[errorLocalMessages]',
})
export class LocalMessagesDirective {
  @Input()
  public errorLocalMessages: UntypedFormGroup = new UntypedFormGroup({});

  constructor() {}

  /**
   * Prevent propagation of click event if form is not valid and marking all items as touched
   * @param $event
   */
  @HostListener('click', ['$event'])
  public clickAllowed($event: Event) {
    if (this.errorLocalMessages.invalid) {
      $event.preventDefault();
      $event.stopImmediatePropagation();
      $event.stopPropagation();
      this.errorLocalMessages.markAllAsTouched();
    }
  }
}
