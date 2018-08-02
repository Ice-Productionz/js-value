import Text from "./Text";

export default class Short extends Text {

    constructor(value)
    {
        if (typeof value !== 'string') {
            throw new TypeError('value is not a string')
        }

        super();

        this._value = value;

    }

    /**
     * @returns string
     */
    getRaw()
    {
        return this._value;
    }

}