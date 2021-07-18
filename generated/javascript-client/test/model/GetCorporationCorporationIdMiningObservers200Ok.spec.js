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
    describe('GetCorporationCorporationIdMiningObservers200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationCorporationIdMiningObservers200Ok();
      });

      it('should create an instance of GetCorporationCorporationIdMiningObservers200Ok', function() {
        // TODO: update the code to test GetCorporationCorporationIdMiningObservers200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationCorporationIdMiningObservers200Ok);
      });

      it('should have the property lastUpdated (base name: "last_updated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property observerId (base name: "observer_id")', function() {
        // TODO: update the code to test the property observerId
        expect(instance).to.have.property('observerId');
        // expect(instance.observerId).to.be(expectedValueLiteral);
      });

      it('should have the property observerType (base name: "observer_type")', function() {
        // TODO: update the code to test the property observerType
        expect(instance).to.have.property('observerType');
        // expect(instance.observerType).to.be(expectedValueLiteral);
      });

    });
  });

}));