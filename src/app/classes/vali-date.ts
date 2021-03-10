import { AbstractControl, FormControl } from "@angular/forms";

export class ValiDate {

    dateValidator(c: AbstractControl): { [key: string]: boolean } {
        let value = c.value;
        if (value && typeof value === "string") {
          let match = value.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
          if (!match) {
            return { 'dateInvalid': true };
          } else if (match && match[0] !== value) {
            return { 'dateInvalid': true };
          }
        }
        return null;
      }
}
