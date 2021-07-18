/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.7.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetCorporationsCorporationIdWalletsDivisionTransactions200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdWalletsDivisionTransactions200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdWalletsDivisionTransactions200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdWalletsDivisionTransactions200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdWalletsDivisionTransactions200Ok);
      });

      it('should have the property clientId (base name: "client_id")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property isBuy (base name: "is_buy")', function() {
        // TODO: update the code to test the property isBuy
        expect(instance).to.have.property('isBuy');
        // expect(instance.isBuy).to.be(expectedValueLiteral);
      });

      it('should have the property journalRefId (base name: "journal_ref_id")', function() {
        // TODO: update the code to test the property journalRefId
        expect(instance).to.have.property('journalRefId');
        // expect(instance.journalRefId).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property transactionId (base name: "transaction_id")', function() {
        // TODO: update the code to test the property transactionId
        expect(instance).to.have.property('transactionId');
        // expect(instance.transactionId).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

      it('should have the property unitPrice (base name: "unit_price")', function() {
        // TODO: update the code to test the property unitPrice
        expect(instance).to.have.property('unitPrice');
        // expect(instance.unitPrice).to.be(expectedValueLiteral);
      });

    });
  });

}));
