export class UserDto {
    public id?: number;
    public login: string = '';
    public password: string = '';
    public stayConnected?: boolean = false;
}
