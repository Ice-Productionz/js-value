
import {describe, it, before, after} from 'mocha';
import {expect} from 'chai';
import Uuid from "../../../src/Identifier/Uuid";


describe('<Uuid />', () => {
    it('should construct with values', () => {
        let value = '12312';
        let sut = new Uuid(value);

        expect(sut.getRaw()).to.equal(value);
    });
});