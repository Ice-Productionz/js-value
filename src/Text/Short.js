import Text from "./Text";

export default class Short extends Text {

    constructor(value)
    {
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