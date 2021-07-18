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
    describe('GetCharactersCharacterIdContracts200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdContracts200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdContracts200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok);
      });

      it('should have the property acceptorId (base name: "acceptor_id")', function() {
        // TODO: update the code to test the property acceptorId
        expect(instance).to.have.property('acceptorId');
        // expect(instance.acceptorId).to.be(expectedValueLiteral);
      });

      it('should have the property assigneeId (base name: "assignee_id")', function() {
        // TODO: update the code to test the property assigneeId
        expect(instance).to.have.property('assigneeId');
        // expect(instance.assigneeId).to.be(expectedValueLiteral);
      });

      it('should have the property availability (base name: "availability")', function() {
        // TODO: update the code to test the property availability
        expect(instance).to.have.property('availability');
        // expect(instance.availability).to.be(expectedValueLiteral);
      });

      it('should have the property buyout (base name: "buyout")', function() {
        // TODO: update the code to test the property buyout
        expect(instance).to.have.property('buyout');
        // expect(instance.buyout).to.be(expectedValueLiteral);
      });

      it('should have the property collateral (base name: "collateral")', function() {
        // TODO: update the code to test the property collateral
        expect(instance).to.have.property('collateral');
        // expect(instance.collateral).to.be(expectedValueLiteral);
      });

      it('should have the property contractId (base name: "contract_id")', function() {
        // TODO: update the code to test the property contractId
        expect(instance).to.have.property('contractId');
        // expect(instance.contractId).to.be(expectedValueLiteral);
      });

      it('should have the property dateAccepted (base name: "date_accepted")', function() {
        // TODO: update the code to test the property dateAccepted
        expect(instance).to.have.property('dateAccepted');
        // expect(instance.dateAccepted).to.be(expectedValueLiteral);
      });

      it('should have the property dateCompleted (base name: "date_completed")', function() {
        // TODO: update the code to test the property dateCompleted
        expect(instance).to.have.property('dateCompleted');
        // expect(instance.dateCompleted).to.be(expectedValueLiteral);
      });

      it('should have the property dateExpired (base name: "date_expired")', function() {
        // TODO: update the code to test the property dateExpired
        expect(instance).to.have.property('dateExpired');
        // expect(instance.dateExpired).to.be(expectedValueLiteral);
      });

      it('should have the property dateIssued (base name: "date_issued")', function() {
        // TODO: update the code to test the property dateIssued
        expect(instance).to.have.property('dateIssued');
        // expect(instance.dateIssued).to.be(expectedValueLiteral);
      });

      it('should have the property daysToComplete (base name: "days_to_complete")', function() {
        // TODO: update the code to test the property daysToComplete
        expect(instance).to.have.property('daysToComplete');
        // expect(instance.daysToComplete).to.be(expectedValueLiteral);
      });

      it('should have the property endLocationId (base name: "end_location_id")', function() {
        // TODO: update the code to test the property endLocationId
        expect(instance).to.have.property('endLocationId');
        // expect(instance.endLocationId).to.be(expectedValueLiteral);
      });

      it('should have the property forCorporation (base name: "for_corporation")', function() {
        // TODO: update the code to test the property forCorporation
        expect(instance).to.have.property('forCorporation');
        // expect(instance.forCorporation).to.be(expectedValueLiteral);
      });

      it('should have the property issuerCorporationId (base name: "issuer_corporation_id")', function() {
        // TODO: update the code to test the property issuerCorporationId
        expect(instance).to.have.property('issuerCorporationId');
        // expect(instance.issuerCorporationId).to.be(expectedValueLiteral);
      });

      it('should have the property issuerId (base name: "issuer_id")', function() {
        // TODO: update the code to test the property issuerId
        expect(instance).to.have.property('issuerId');
        // expect(instance.issuerId).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property reward (base name: "reward")', function() {
        // TODO: update the code to test the property reward
        expect(instance).to.have.property('reward');
        // expect(instance.reward).to.be(expectedValueLiteral);
      });

      it('should have the property startLocationId (base name: "start_location_id")', function() {
        // TODO: update the code to test the property startLocationId
        expect(instance).to.have.property('startLocationId');
        // expect(instance.startLocationId).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property volume (base name: "volume")', function() {
        // TODO: update the code to test the property volume
        expect(instance).to.have.property('volume');
        // expect(instance.volume).to.be(expectedValueLiteral);
      });

    });
  });

}));
