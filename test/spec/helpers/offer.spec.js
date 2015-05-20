define([
  'helpers/offer'
],

function (offerHelper) {
  'use strict';

  describe('offerHelper', function () {

    before(function () {
      this.offers = [{
          type: 'percentage',
          value: 4
        },
        {
          type: 'minus',
          value: 15
        },
        {
          type: 'slice',
          sliceValue: 80,
          value: 14
        }];
    });

    after(function () {
      this.offers = null;
    });

    describe('[percentage]', function () {
      it('should return a reduction of the price', function () {
        var result = offerHelper.percentage(95, this.offers);
        result.should.be.eql(91.2);
      });

      it('should return undefined', function () {
        var result = offerHelper.percentage();
        expect(result).to.be.undefined;
      });
    });

    describe('[minus]', function () {
      it('should return a reduction of the price', function () {
        var result = offerHelper.minus(57, this.offers);
        result.should.be.eql(42);
      });

      it('should return undefined', function () {
        var result = offerHelper.minus();
        expect(result).to.be.undefined;
      });
    });

    describe('[slice]', function () {
      it('should return a reduction of the price', function () {
        var result = offerHelper.slice(124, this.offers);
        result.should.be.eql(110);
      });

      it('should return undefined', function () {
        var result = offerHelper.slice();
        expect(result).to.be.undefined;
      });
    });

    describe('[getSliceValue]', function () {
      it('should return the value of sliceValue property', function () {
        var result = offerHelper.getSliceValue(this.offers);
        result.should.be.eql(80);
      });

      it('should return undefined', function () {
        var result = offerHelper.getSliceValue();
        expect(result).to.be.undefined;
      });
    });

    describe('[getOfferValue]', function () {
      it('should return the value of the percentage type', function () {
        var result = offerHelper.getOfferValue('percentage', this.offers);
        result.should.be.eql(4);
      });

      it('should return undefined', function () {
        var result = offerHelper.getOfferValue();
        expect(result).to.be.undefined;
      });
    });

    describe('[pickOffer]', function () {
      it('should return the minus offer', function () {
        var result = offerHelper.pickOffer('minus', this.offers);

        result[1].should.be.an('object')
          .and.have.keys(['type', 'value']);
      });

      it('should return undefined', function () {
        var result = offerHelper.pickOffer();
        expect(result).to.be.undefined;
      });
    });

    describe('[getBestOffer]', function () {
      it('should return the best offer', function () {
        var result = offerHelper.getBestOffer(95, this.offers);
        result.should.be.eql(80);
      });

      it('should return undefined', function () {
        var result = offerHelper.getBestOffer();
        expect(result).to.be.undefined;
      });
    });
  });
});
