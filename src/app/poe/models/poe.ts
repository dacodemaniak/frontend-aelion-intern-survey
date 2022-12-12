enum POE_TYPE {
    POEI = 'POEI',
    POEC = 'POEC'
}
export class Poe {
    private _id?: number;
    private _title: string = '';
    private _beginDate!: Date;
    private _endDate!: Date;
    private _type: POE_TYPE = POE_TYPE.POEI;

    get id() {
      return this._id!
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get title() {
      return this._title
    }
    
    set title(val: string) {
      this._title = val
    }
    
    get beginDate() {
      return this._beginDate
    }
    
    set beginDate(val: Date) {
      this._beginDate = val
    }
    
    get endDate() {
      return this._endDate
    }
    
    set endDate(val: Date) {
      this._endDate = val
    }
    
    get type() {
      return this._type
    }
    
    set type(val: POE_TYPE) {
      this._type = val
    }

    public deserialize(datas: any): void {
        this._id = datas.id;
        this._title = datas.title;
        this._beginDate = new Date(datas.beginDate);
        this._endDate = new Date(datas.endDate);
        this._type = datas.type    
    }
}
