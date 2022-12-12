export class User {
    private _id?: number;
    private _login: string = '';


    /**
     * User user = new User()
     * user.id = 1
     * console.log(user.id) // Expect 1
     */
    public get id(): number {
        return this._id!;
    }

    /**
     * User user = new User(): void
     * user.id = 1
     */
    public set id(id: number) {
        this._id = id;
    }

    public get login(): string {
        return this._login;
    }

    public set login(login: string) {
        this._login = login;
    }


}
