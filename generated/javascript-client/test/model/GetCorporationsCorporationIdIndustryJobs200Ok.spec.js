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
    describe('GetCorporationsCorporationIdIndustryJobs200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdIndustryJobs200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdIndustryJobs200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdIndustryJobs200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdIndustryJobs200Ok);
      });

      it('should have the property activityId (base name: "activity_id")', function() {
        // TODO: update the code to test the property activityId
        expect(instance).to.have.property('activityId');
        // expect(instance.activityId).to.be(expectedValueLiteral);
      });

      it('should have the property blueprintId (base name: "blueprint_id")', function() {
        // TODO: update the code to test the property blueprintId
        expect(instance).to.have.property('blueprintId');
        // expect(instance.blueprintId).to.be(expectedValueLiteral);
      });

      it('should have the property blueprintLocationId (base name: "blueprint_location_id")', function() {
        // TODO: update the code to test the property blueprintLocationId
        expect(instance).to.have.property('blueprintLocationId');
        // expect(instance.blueprintLocationId).to.be(expectedValueLiteral);
      });

      it('should have the property blueprintTypeId (base name: "blueprint_type_id")', function() {
        // TODO: update the code to test the property blueprintTypeId
        expect(instance).to.have.property('blueprintTypeId');
        // expect(instance.blueprintTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property completedCharacterId (base name: "completed_character_id")', function() {
        // TODO: update the code to test the property completedCharacterId
        expect(instance).to.have.property('completedCharacterId');
        // expect(instance.completedCharacterId).to.be(expectedValueLiteral);
      });

      it('should have the property completedDate (base name: "completed_date")', function() {
        // TODO: update the code to test the property completedDate
        expect(instance).to.have.property('completedDate');
        // expect(instance.completedDate).to.be(expectedValueLiteral);
      });

      it('should have the property cost (base name: "cost")', function() {
        // TODO: update the code to test the property cost
        expect(instance).to.have.property('cost');
        // expect(instance.cost).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "end_date")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property facilityId (base name: "facility_id")', function() {
        // TODO: update the code to test the property facilityId
        expect(instance).to.have.property('facilityId');
        // expect(instance.facilityId).to.be(expectedValueLiteral);
      });

      it('should have the property installerId (base name: "installer_id")', function() {
        // TODO: update the code to test the property installerId
        expect(instance).to.have.property('installerId');
        // expect(instance.installerId).to.be(expectedValueLiteral);
      });

      it('should have the property jobId (base name: "job_id")', function() {
        // TODO: update the code to test the property jobId
        expect(instance).to.have.property('jobId');
        // expect(instance.jobId).to.be(expectedValueLiteral);
      });

      it('should have the property licensedRuns (base name: "licensed_runs")', function() {
        // TODO: update the code to test the property licensedRuns
        expect(instance).to.have.property('licensedRuns');
        // expect(instance.licensedRuns).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property outputLocationId (base name: "output_location_id")', function() {
        // TODO: update the code to test the property outputLocationId
        expect(instance).to.have.property('outputLocationId');
        // expect(instance.outputLocationId).to.be(expectedValueLiteral);
      });

      it('should have the property pauseDate (base name: "pause_date")', function() {
        // TODO: update the code to test the property pauseDate
        expect(instance).to.have.property('pauseDate');
        // expect(instance.pauseDate).to.be(expectedValueLiteral);
      });

      it('should have the property probability (base name: "probability")', function() {
        // TODO: update the code to test the property probability
        expect(instance).to.have.property('probability');
        // expect(instance.probability).to.be(expectedValueLiteral);
      });

      it('should have the property productTypeId (base name: "product_type_id")', function() {
        // TODO: update the code to test the property productTypeId
        expect(instance).to.have.property('productTypeId');
        // expect(instance.productTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property runs (base name: "runs")', function() {
        // TODO: update the code to test the property runs
        expect(instance).to.have.property('runs');
        // expect(instance.runs).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property successfulRuns (base name: "successful_runs")', function() {
        // TODO: update the code to test the property successfulRuns
        expect(instance).to.have.property('successfulRuns');
        // expect(instance.successfulRuns).to.be(expectedValueLiteral);
      });

    });
  });

}));
