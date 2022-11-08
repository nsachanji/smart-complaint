import { LocalMessagesDirective } from './local-messages.directive';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

describe('LocalMessagesDirective', () => {
  let directive: LocalMessagesDirective;

  beforeEach(() => {
    directive = new LocalMessagesDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should do nothing when form is valid', () => {
    const event = {
      preventDefault: () => ({}),
      stopImmediatePropagation: () => ({}),
      stopPropagation: () => ({}),
    };

    const preventSpy = spyOn(event, 'preventDefault');
    const immediatePropagationSpy = spyOn(event, 'stopImmediatePropagation');
    const propagationSpy = spyOn(event, 'stopPropagation');

    directive.clickAllowed(event as any);

    expect(preventSpy).not.toHaveBeenCalled();
    expect(immediatePropagationSpy).not.toHaveBeenCalled();
    expect(propagationSpy).not.toHaveBeenCalled();
  });

  it('should prevent propagation and mark all as touched', () => {
    const event = {
      preventDefault: () => ({}),
      stopImmediatePropagation: () => ({}),
      stopPropagation: () => ({}),
    };

    const preventSpy = spyOn(event, 'preventDefault');
    const immediatePropagationSpy = spyOn(event, 'stopImmediatePropagation');
    const propagationSpy = spyOn(event, 'stopPropagation');

    directive.errorLocalMessages = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
    });

    const markAllTouchedSpy = spyOn(
      directive.errorLocalMessages,
      'markAllAsTouched',
    );

    directive.clickAllowed(event as any);

    expect(preventSpy).toHaveBeenCalled();
    expect(immediatePropagationSpy).toHaveBeenCalled();
    expect(propagationSpy).toHaveBeenCalled();
    expect(markAllTouchedSpy).toHaveBeenCalled();
  });
});
