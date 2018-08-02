
import {describe, it, before, after} from 'mocha';
import {expect} from 'chai';
import Url from "../../../../src/ValueObjects/Uri/Url";


describe('<Url />', () => {
    it('should construct with values', () => {
        let value = '12312';
        let sut = new Url(value);

        expect(sut.getRaw()).to.equal(value);
    });
});