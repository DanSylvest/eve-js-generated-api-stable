/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.7.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    describe('GetCharactersCharacterIdStatsTravel', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      });

      it('should create an instance of GetCharactersCharacterIdStatsTravel', function() {
        // TODO: update the code to test GetCharactersCharacterIdStatsTravel
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsTravel);
      });

      it('should have the property accelerationGateActivations (base name: "acceleration_gate_activations")', function() {
        // TODO: update the code to test the property accelerationGateActivations
        expect(instance).to.have.property('accelerationGateActivations');
        // expect(instance.accelerationGateActivations).to.be(expectedValueLiteral);
      });

      it('should have the property alignTo (base name: "align_to")', function() {
        // TODO: update the code to test the property alignTo
        expect(instance).to.have.property('alignTo');
        // expect(instance.alignTo).to.be(expectedValueLiteral);
      });

      it('should have the property distanceWarpedHighSec (base name: "distance_warped_high_sec")', function() {
        // TODO: update the code to test the property distanceWarpedHighSec
        expect(instance).to.have.property('distanceWarpedHighSec');
        // expect(instance.distanceWarpedHighSec).to.be(expectedValueLiteral);
      });

      it('should have the property distanceWarpedLowSec (base name: "distance_warped_low_sec")', function() {
        // TODO: update the code to test the property distanceWarpedLowSec
        expect(instance).to.have.property('distanceWarpedLowSec');
        // expect(instance.distanceWarpedLowSec).to.be(expectedValueLiteral);
      });

      it('should have the property distanceWarpedNullSec (base name: "distance_warped_null_sec")', function() {
        // TODO: update the code to test the property distanceWarpedNullSec
        expect(instance).to.have.property('distanceWarpedNullSec');
        // expect(instance.distanceWarpedNullSec).to.be(expectedValueLiteral);
      });

      it('should have the property distanceWarpedWormhole (base name: "distance_warped_wormhole")', function() {
        // TODO: update the code to test the property distanceWarpedWormhole
        expect(instance).to.have.property('distanceWarpedWormhole');
        // expect(instance.distanceWarpedWormhole).to.be(expectedValueLiteral);
      });

      it('should have the property docksHighSec (base name: "docks_high_sec")', function() {
        // TODO: update the code to test the property docksHighSec
        expect(instance).to.have.property('docksHighSec');
        // expect(instance.docksHighSec).to.be(expectedValueLiteral);
      });

      it('should have the property docksLowSec (base name: "docks_low_sec")', function() {
        // TODO: update the code to test the property docksLowSec
        expect(instance).to.have.property('docksLowSec');
        // expect(instance.docksLowSec).to.be(expectedValueLiteral);
      });

      it('should have the property docksNullSec (base name: "docks_null_sec")', function() {
        // TODO: update the code to test the property docksNullSec
        expect(instance).to.have.property('docksNullSec');
        // expect(instance.docksNullSec).to.be(expectedValueLiteral);
      });

      it('should have the property jumpsStargateHighSec (base name: "jumps_stargate_high_sec")', function() {
        // TODO: update the code to test the property jumpsStargateHighSec
        expect(instance).to.have.property('jumpsStargateHighSec');
        // expect(instance.jumpsStargateHighSec).to.be(expectedValueLiteral);
      });

      it('should have the property jumpsStargateLowSec (base name: "jumps_stargate_low_sec")', function() {
        // TODO: update the code to test the property jumpsStargateLowSec
        expect(instance).to.have.property('jumpsStargateLowSec');
        // expect(instance.jumpsStargateLowSec).to.be(expectedValueLiteral);
      });

      it('should have the property jumpsStargateNullSec (base name: "jumps_stargate_null_sec")', function() {
        // TODO: update the code to test the property jumpsStargateNullSec
        expect(instance).to.have.property('jumpsStargateNullSec');
        // expect(instance.jumpsStargateNullSec).to.be(expectedValueLiteral);
      });

      it('should have the property jumpsWormhole (base name: "jumps_wormhole")', function() {
        // TODO: update the code to test the property jumpsWormhole
        expect(instance).to.have.property('jumpsWormhole');
        // expect(instance.jumpsWormhole).to.be(expectedValueLiteral);
      });

      it('should have the property warpsHighSec (base name: "warps_high_sec")', function() {
        // TODO: update the code to test the property warpsHighSec
        expect(instance).to.have.property('warpsHighSec');
        // expect(instance.warpsHighSec).to.be(expectedValueLiteral);
      });

      it('should have the property warpsLowSec (base name: "warps_low_sec")', function() {
        // TODO: update the code to test the property warpsLowSec
        expect(instance).to.have.property('warpsLowSec');
        // expect(instance.warpsLowSec).to.be(expectedValueLiteral);
      });

      it('should have the property warpsNullSec (base name: "warps_null_sec")', function() {
        // TODO: update the code to test the property warpsNullSec
        expect(instance).to.have.property('warpsNullSec');
        // expect(instance.warpsNullSec).to.be(expectedValueLiteral);
      });

      it('should have the property warpsToBookmark (base name: "warps_to_bookmark")', function() {
        // TODO: update the code to test the property warpsToBookmark
        expect(instance).to.have.property('warpsToBookmark');
        // expect(instance.warpsToBookmark).to.be(expectedValueLiteral);
      });

      it('should have the property warpsToCelestial (base name: "warps_to_celestial")', function() {
        // TODO: update the code to test the property warpsToCelestial
        expect(instance).to.have.property('warpsToCelestial');
        // expect(instance.warpsToCelestial).to.be(expectedValueLiteral);
      });

      it('should have the property warpsToFleetMember (base name: "warps_to_fleet_member")', function() {
        // TODO: update the code to test the property warpsToFleetMember
        expect(instance).to.have.property('warpsToFleetMember');
        // expect(instance.warpsToFleetMember).to.be(expectedValueLiteral);
      });

      it('should have the property warpsToScanResult (base name: "warps_to_scan_result")', function() {
        // TODO: update the code to test the property warpsToScanResult
        expect(instance).to.have.property('warpsToScanResult');
        // expect(instance.warpsToScanResult).to.be(expectedValueLiteral);
      });

      it('should have the property warpsWormhole (base name: "warps_wormhole")', function() {
        // TODO: update the code to test the property warpsWormhole
        expect(instance).to.have.property('warpsWormhole');
        // expect(instance.warpsWormhole).to.be(expectedValueLiteral);
      });

    });
  });

}));
