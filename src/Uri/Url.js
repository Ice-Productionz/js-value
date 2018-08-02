import Uri from "./Uri";

export default class Url  extends Uri {

    /**
     *
     * @param {string} value
     */
    constructor(value)
    {
        super();

        this._value = value;
    }

    /**
     *
     * @returns {string}
     */
    getRaw()
    {
        return this._value;
    }
}