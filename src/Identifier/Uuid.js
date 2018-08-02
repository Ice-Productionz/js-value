import Identfier from "./Identfier";

export default class Uuid extends Identfier {

    /**
     * @param {string} value
     */
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