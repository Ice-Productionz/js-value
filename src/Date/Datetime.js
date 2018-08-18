import DateObject from "./Date";

export default class Datetime extends DateObject {

    /**
     * @type {Date}
     */
    _value;

    /**
     *
     * @param {Date} value
     */
    constructor(value)
    {
        if (!(Object.prototype.toString.call(value) === '[object Date]')) {
            throw new TypeError('value is not a Date')
        }
        super();

        this._value = value;
    }

    /**
     * @returns Date
     */
    getRaw()
    {
        return this._value;
    }
}