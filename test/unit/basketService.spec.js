
(function () {
    'use strict';

    describe('Service: BasketService', function () {

          var shoes = {
              "name": {
                  "description": "Almond Toe Court Shoes, Patent Black",
                  "type": "string"
              },
              "category": {
                "description": "Women's Footwear",
                "type": "string"
              },
              "price": {
                "unit": "99.00",
                  "type": "integer"
              },
              "stock": {
                "units": "5",
                "minimum": "0",
                "type": "integer"
              }
          };

          var towel = {};

        beforeEach(module('app'));

        var BasketService, ctrl, scope;

        beforeEach(inject(function ($injector, $controller) {
            BasketService = $injector.get('BasketService');
            ctrl = $controller('ProductController', { $scope: scope});
        }));

        it('should do something', function () {
            expect(!!BasketService).toBe(true);
        });


        describe('on initialisation', function () {

            it('basket should be an array with zero items inside it', function () {
                expect(BasketService.basket).toEqual([]);
            });

            it ('the basket total price should be zero', function () {
              expect(BasketService.totalCost).toEqual(0);
            });

        });

        describe('adding to the basket', function () {


          it('should have an item in the basket when one has been added', function () {
              ctrl.service.addToBasket(shoes);
              expect(BasketService.basket.length).toEqual(1);
          });

        });

        describe('removing items', function () {

          beforeEach(function() {
            ctrl.service.addToBasket(shoes);
          });

          it('an item should be removed from the basket when required', function () {
            ctrl.service.removeFromBasket(shoes);
            expect(BasketService.basket.length).toEqual(0);
          });

          it('an item should not be removed from the basket when it is a different item', function () {
            ctrl.service.removeFromBasket(towel);
            expect(BasketService.basket.length).toEqual(1);
          });

        });

        describe('applying discounts', function () {

          xit('Voucher code £FREE does not remove anything from the total', function () {

          });

          // it('Voucher code £5-OFF removes £5 from total', function () {
          //   ctrl.service.applyVoucher('£5-OFF');
          //   expect(BasketService.total).toEqual(50);
          // });

          xit('Voucher code £10-OFF removes £10 from total having spent more than £50', function () {

          });

          xit('Voucher code £15-OFF removes £15 from total when one pair of shoes are included and total is more than £75', function () {

          });

          xit('can only be applied once', function () {

          });


        });


        describe('total cost of items within basket', function () {

          it('adds two items prices together', function () {
            ctrl.service.addToBasket(shoes);
            ctrl.service.addToBasket(shoes);
            expect(BasketService.totalCost).toEqual(198.00);
          });

          it('should remove price of an item if it is removed from the basket', function () {
            ctrl.service.removeFromBasket(shoes);
          });
        });
    });
}());

