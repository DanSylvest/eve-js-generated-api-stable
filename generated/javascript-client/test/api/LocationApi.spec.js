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

  beforeEach(function() {
    instance = new EveSwaggerInterface.LocationApi();
  });

  describe('(package)', function() {
    describe('LocationApi', function() {
      describe('getCharactersCharacterIdLocation', function() {
        it('should call getCharactersCharacterIdLocation successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdLocation call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdLocation(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdLocationOk);
            expect(data.solarSystemId).to.be.a('number');
            expect(data.solarSystemId).to.be(0);
            expect(data.stationId).to.be.a('number');
            expect(data.stationId).to.be(0);
            expect(data.structureId).to.be.a('number');
            expect(data.structureId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdOnline', function() {
        it('should call getCharactersCharacterIdOnline successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdOnline call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdOnline(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdOnlineOk);
            expect(data.lastLogin).to.be.a(Date);
            expect(data.lastLogin).to.be(new Date());
            expect(data.lastLogout).to.be.a(Date);
            expect(data.lastLogout).to.be(new Date());
            expect(data.logins).to.be.a('number');
            expect(data.logins).to.be(0);
            expect(data.online).to.be.a('boolean');
            expect(data.online).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdShip', function() {
        it('should call getCharactersCharacterIdShip successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdShip call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdShip(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdShipOk);
            expect(data.shipItemId).to.be.a('number');
            expect(data.shipItemId).to.be("0");
            expect(data.shipName).to.be.a('string');
            expect(data.shipName).to.be("");
            expect(data.shipTypeId).to.be.a('number');
            expect(data.shipTypeId).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
