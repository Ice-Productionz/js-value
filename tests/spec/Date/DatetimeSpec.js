
import {describe, it, before, after} from 'mocha';
import {expect} from 'chai';
import Datetime from "../../../src/Date/Datetime";


describe('<Date />', () => {
    it('should construct with values', () => {
        let value = new Date();

        let sut = new Datetime(value);

        expect(sut.getRaw()).to.equal(value);
    });
});