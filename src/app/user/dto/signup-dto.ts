export class SignupDto {
    private userLogin: string = '';
    private userPassword: string = '';
    private roles: string[] = [
        'user'
    ];

    private constructor() {}

    public static fromSignupForm(formData: any): SignupDto {
        const dto: SignupDto = new SignupDto();
        dto.userLogin = formData.login;
        dto.userPassword = formData.password;

        return dto;
    }
}
