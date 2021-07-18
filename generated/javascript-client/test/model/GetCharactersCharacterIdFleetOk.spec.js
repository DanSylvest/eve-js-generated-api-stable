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
    describe('GetCharactersCharacterIdFleetOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdFleetOk();
      });

      it('should create an instance of GetCharactersCharacterIdFleetOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdFleetOk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdFleetOk);
      });

      it('should have the property fleetId (base name: "fleet_id")', function() {
        // TODO: update the code to test the property fleetId
        expect(instance).to.have.property('fleetId');
        // expect(instance.fleetId).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property squadId (base name: "squad_id")', function() {
        // TODO: update the code to test the property squadId
        expect(instance).to.have.property('squadId');
        // expect(instance.squadId).to.be(expectedValueLiteral);
      });

      it('should have the property wingId (base name: "wing_id")', function() {
        // TODO: update the code to test the property wingId
        expect(instance).to.have.property('wingId');
        // expect(instance.wingId).to.be(expectedValueLiteral);
      });

    });
  });

}));
