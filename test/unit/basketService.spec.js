
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


          var socks = {
              "name": {
                  "description": "Socks, Green",
                  "type": "string"
              },
              "category": {
                "description": "Men's Footwear",
                "type": "string"
              },
              "price": {
                "unit": "9.00",
                  "type": "integer"
              },
              "stock": {
                "units": "5",
                "minimum": "0",
                "type": "integer"
              }
          };

          var jumper = {
              "name": {
                  "description": "Jumper, Blue",
                  "type": "string"
              },
              "category": {
                "description": "Men's Casualwear",
                "type": "string"
              },
              "price": {
                "unit": "51.00",
                  "type": "integer"
              },
              "stock": {
                "units": "5",
                "minimum": "0",
                "type": "integer"
              }
          };

          var jacket = {
              "name": {
                  "description": "Jacket, Grey",
                  "type": "string"
              },
              "category": {
                "description": "Men's Casualwear",
                "type": "string"
              },
              "price": {
                "unit": "56.00",
                  "type": "integer"
              },
              "stock": {
                "units": "0",
                "minimum": "0",
                "type": "integer"
              }
            };

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

            it ('the basket sub-total should be zero', function () {
              expect(BasketService.subTotal).toEqual(0);
            });

        });

        describe('adding to the basket', function () {


              it('should have an item in the basket when one has been added', function () {
                  ctrl.service.addToBasket(shoes);
                  expect(BasketService.basket.length).toEqual(1);
              });

              it('should not add an out of stock item to the basket', function () {
                  ctrl.service.addToBasket(jacket);
                  expect(BasketService.basket.length).toEqual(0);
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
                ctrl.service.removeFromBasket(jumper);
                expect(BasketService.basket.length).toEqual(1);
              });

        });


        describe('calculating subtotal', function () {

              beforeEach(function () {
                ctrl.service.addToBasket(shoes);
                ctrl.service.addToBasket(shoes);
              });

              it('adds two items prices together', function () {
                expect(BasketService.subTotal).toEqual(198.00);
              });

              it('should remove price of an item if it is removed from the basket', function () {
                ctrl.service.removeFromBasket(shoes);
                expect(BasketService.subTotal).toEqual(99.00);
              });

        });

        describe('applying discounts', function () {

              it('Voucher code £FREE does not remove anything from the total', function () {
                ctrl.service.addToBasket(socks);
                ctrl.service.applyVoucher("£FREE");
                expect(BasketService.total).toEqual(9.00);
              });

              it('Voucher code £5-OFF removes £5 from total', function () {
                ctrl.service.addToBasket(socks);
                ctrl.service.applyVoucher('£5-OFF');
                expect(BasketService.total).toEqual(4.00);
              });

              it('Voucher code £10-OFF removes £10 from total having spent more than £50', function () {
                 ctrl.service.addToBasket(jumper);
                 ctrl.service.applyVoucher('£10-OFF');
                 expect(BasketService.total).toEqual(41.00);
              });

              it('£10-OFF does not work if total is less than £50', function () {
                  ctrl.service.addToBasket(socks);
                  ctrl.service.applyVoucher('£10-OFF');
                  expect(BasketService.total).toEqual(9.00);
                });

              it('Voucher code £15-OFF removes £15 from total when one pair of shoes are included and total is more than £75', function () {
                  ctrl.service.addToBasket(shoes);
                  ctrl.service.applyVoucher('£15-OFF');
                  expect(BasketService.total).toEqual(84.00);
              });

              it('£15-OFF does not work on orders less than £75', function () {
                  ctrl.service.addToBasket(jumper);
                  ctrl.service.applyVoucher('£15-OFF');
                  expect(BasketService.total).toEqual(51.00);
              });

              it('£15-OFF only works when there is a pair of shoes in the order', function () {
                  ctrl.service.addToBasket(jumper);
                  ctrl.service.addToBasket(jumper);
                  ctrl.service.applyVoucher('£15-OFF');
                  expect(BasketService.total).toEqual(102.00);
              });

              xit('can only be applied once', function () {

              });


        });
    });
}());

