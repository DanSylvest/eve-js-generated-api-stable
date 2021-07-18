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
    describe('GetFleetsFleetIdMembers200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetFleetsFleetIdMembers200Ok();
      });

      it('should create an instance of GetFleetsFleetIdMembers200Ok', function() {
        // TODO: update the code to test GetFleetsFleetIdMembers200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetFleetsFleetIdMembers200Ok);
      });

      it('should have the property characterId (base name: "character_id")', function() {
        // TODO: update the code to test the property characterId
        expect(instance).to.have.property('characterId');
        // expect(instance.characterId).to.be(expectedValueLiteral);
      });

      it('should have the property joinTime (base name: "join_time")', function() {
        // TODO: update the code to test the property joinTime
        expect(instance).to.have.property('joinTime');
        // expect(instance.joinTime).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property roleName (base name: "role_name")', function() {
        // TODO: update the code to test the property roleName
        expect(instance).to.have.property('roleName');
        // expect(instance.roleName).to.be(expectedValueLiteral);
      });

      it('should have the property shipTypeId (base name: "ship_type_id")', function() {
        // TODO: update the code to test the property shipTypeId
        expect(instance).to.have.property('shipTypeId');
        // expect(instance.shipTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property solarSystemId (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solarSystemId
        expect(instance).to.have.property('solarSystemId');
        // expect(instance.solarSystemId).to.be(expectedValueLiteral);
      });

      it('should have the property squadId (base name: "squad_id")', function() {
        // TODO: update the code to test the property squadId
        expect(instance).to.have.property('squadId');
        // expect(instance.squadId).to.be(expectedValueLiteral);
      });

      it('should have the property stationId (base name: "station_id")', function() {
        // TODO: update the code to test the property stationId
        expect(instance).to.have.property('stationId');
        // expect(instance.stationId).to.be(expectedValueLiteral);
      });

      it('should have the property takesFleetWarp (base name: "takes_fleet_warp")', function() {
        // TODO: update the code to test the property takesFleetWarp
        expect(instance).to.have.property('takesFleetWarp');
        // expect(instance.takesFleetWarp).to.be(expectedValueLiteral);
      });

      it('should have the property wingId (base name: "wing_id")', function() {
        // TODO: update the code to test the property wingId
        expect(instance).to.have.property('wingId');
        // expect(instance.wingId).to.be(expectedValueLiteral);
      });

    });
  });

}));
