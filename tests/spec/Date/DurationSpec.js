
import {describe, it, before, after} from 'mocha';
import {expect} from 'chai';
import Duration from "../../../src/Date/Duration";


describe('<Duration />', () => {
    it('should construct with values', () => {
        let value = 516846;

        let sut = new Duration(value);

        expect(sut.getRaw()).to.equal(value);
    });
});