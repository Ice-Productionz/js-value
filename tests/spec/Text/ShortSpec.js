
import {describe, it} from 'mocha';
import {expect} from 'chai';
import Short from "../../../src/Text/Short";


describe('<Short />', () => {
    it('should construct with correct values', () => {
        let value = '12312';
        let sut = new Short(value);

        expect(sut.getRaw()).to.equal(value);
    });
    it('should construct with non string values', () => {
        let fcn = () => {new Short(123)};
        expect(fcn).to.throw(TypeError, 'value is not a string');
    });
});