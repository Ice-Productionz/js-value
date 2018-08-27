import DateObject from "./Date";

export default class Duration extends DateObject {
    /**
     *
     * @param {int} value
     */
    constructor(value)
    {
        if ( typeof value !== "number") {
            throw new TypeError('value is not a number')
        }
        if (!Number.isInteger(value)) {
            throw new TypeError('value is not a integer')
        }
        super();

        this._value = value;
    }

    /**
     * @returns {int}
     */
    getRaw()
    {
        return this._value;
    }
}