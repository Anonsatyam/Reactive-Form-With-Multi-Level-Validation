import { FormGroup } from "@angular/forms";

export function passwordChecker(controlName: string, confirmControlName: string,) {
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[confirmControlName];

        if (password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ mustMatch: true })
        } else {
            confirmPassword.setErrors(null)
        }
    }
}