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
    describe('GetUniverseStationsStationIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      });

      it('should create an instance of GetUniverseStationsStationIdOk', function() {
        // TODO: update the code to test GetUniverseStationsStationIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseStationsStationIdOk);
      });

      it('should have the property maxDockableShipVolume (base name: "max_dockable_ship_volume")', function() {
        // TODO: update the code to test the property maxDockableShipVolume
        expect(instance).to.have.property('maxDockableShipVolume');
        // expect(instance.maxDockableShipVolume).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property officeRentalCost (base name: "office_rental_cost")', function() {
        // TODO: update the code to test the property officeRentalCost
        expect(instance).to.have.property('officeRentalCost');
        // expect(instance.officeRentalCost).to.be(expectedValueLiteral);
      });

      it('should have the property owner (base name: "owner")', function() {
        // TODO: update the code to test the property owner
        expect(instance).to.have.property('owner');
        // expect(instance.owner).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property raceId (base name: "race_id")', function() {
        // TODO: update the code to test the property raceId
        expect(instance).to.have.property('raceId');
        // expect(instance.raceId).to.be(expectedValueLiteral);
      });

      it('should have the property reprocessingEfficiency (base name: "reprocessing_efficiency")', function() {
        // TODO: update the code to test the property reprocessingEfficiency
        expect(instance).to.have.property('reprocessingEfficiency');
        // expect(instance.reprocessingEfficiency).to.be(expectedValueLiteral);
      });

      it('should have the property reprocessingStationsTake (base name: "reprocessing_stations_take")', function() {
        // TODO: update the code to test the property reprocessingStationsTake
        expect(instance).to.have.property('reprocessingStationsTake');
        // expect(instance.reprocessingStationsTake).to.be(expectedValueLiteral);
      });

      it('should have the property services (base name: "services")', function() {
        // TODO: update the code to test the property services
        expect(instance).to.have.property('services');
        // expect(instance.services).to.be(expectedValueLiteral);
      });

      it('should have the property stationId (base name: "station_id")', function() {
        // TODO: update the code to test the property stationId
        expect(instance).to.have.property('stationId');
        // expect(instance.stationId).to.be(expectedValueLiteral);
      });

      it('should have the property systemId (base name: "system_id")', function() {
        // TODO: update the code to test the property systemId
        expect(instance).to.have.property('systemId');
        // expect(instance.systemId).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
