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
    describe('GetFwSystems200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetFwSystems200Ok();
      });

      it('should create an instance of GetFwSystems200Ok', function() {
        // TODO: update the code to test GetFwSystems200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetFwSystems200Ok);
      });

      it('should have the property contested (base name: "contested")', function() {
        // TODO: update the code to test the property contested
        expect(instance).to.have.property('contested');
        // expect(instance.contested).to.be(expectedValueLiteral);
      });

      it('should have the property occupierFactionId (base name: "occupier_faction_id")', function() {
        // TODO: update the code to test the property occupierFactionId
        expect(instance).to.have.property('occupierFactionId');
        // expect(instance.occupierFactionId).to.be(expectedValueLiteral);
      });

      it('should have the property ownerFactionId (base name: "owner_faction_id")', function() {
        // TODO: update the code to test the property ownerFactionId
        expect(instance).to.have.property('ownerFactionId');
        // expect(instance.ownerFactionId).to.be(expectedValueLiteral);
      });

      it('should have the property solarSystemId (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solarSystemId
        expect(instance).to.have.property('solarSystemId');
        // expect(instance.solarSystemId).to.be(expectedValueLiteral);
      });

      it('should have the property victoryPoints (base name: "victory_points")', function() {
        // TODO: update the code to test the property victoryPoints
        expect(instance).to.have.property('victoryPoints');
        // expect(instance.victoryPoints).to.be(expectedValueLiteral);
      });

      it('should have the property victoryPointsThreshold (base name: "victory_points_threshold")', function() {
        // TODO: update the code to test the property victoryPointsThreshold
        expect(instance).to.have.property('victoryPointsThreshold');
        // expect(instance.victoryPointsThreshold).to.be(expectedValueLiteral);
      });

    });
  });

}));
