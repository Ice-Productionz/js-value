
import {describe, it} from 'mocha';
import {expect} from 'chai';
import Text from "../../../src/Text/Short";


describe('<Short />', () => {
    it('should construct with correct values', () => {
        let value = '12312';
        let sut = new Text(value);

        expect(sut.getRaw()).to.equal(value);
    });
    it('should construct with non string values', () => {
        let fcn = () => {new Text(123)};
        expect(fcn).to.throw(TypeError, 'value is not a string');
    });

    it('text ellipsis works', () => {
        let value = '12312';
        let sut = new Text(value);

        expect(sut.getEllipsis()).to.equal(value);
    });
});