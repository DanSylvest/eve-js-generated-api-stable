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
    describe('GetWarsWarIdAlly', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetWarsWarIdAlly();
      });

      it('should create an instance of GetWarsWarIdAlly', function() {
        // TODO: update the code to test GetWarsWarIdAlly
        expect(instance).to.be.a(EveSwaggerInterface.GetWarsWarIdAlly);
      });

      it('should have the property allianceId (base name: "alliance_id")', function() {
        // TODO: update the code to test the property allianceId
        expect(instance).to.have.property('allianceId');
        // expect(instance.allianceId).to.be(expectedValueLiteral);
      });

      it('should have the property corporationId (base name: "corporation_id")', function() {
        // TODO: update the code to test the property corporationId
        expect(instance).to.have.property('corporationId');
        // expect(instance.corporationId).to.be(expectedValueLiteral);
      });

    });
  });

}));
