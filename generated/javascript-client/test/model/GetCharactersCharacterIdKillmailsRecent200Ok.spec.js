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
    describe('GetCharactersCharacterIdKillmailsRecent200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdKillmailsRecent200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdKillmailsRecent200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdKillmailsRecent200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdKillmailsRecent200Ok);
      });

      it('should have the property killmailHash (base name: "killmail_hash")', function() {
        // TODO: update the code to test the property killmailHash
        expect(instance).to.have.property('killmailHash');
        // expect(instance.killmailHash).to.be(expectedValueLiteral);
      });

      it('should have the property killmailId (base name: "killmail_id")', function() {
        // TODO: update the code to test the property killmailId
        expect(instance).to.have.property('killmailId');
        // expect(instance.killmailId).to.be(expectedValueLiteral);
      });

    });
  });

}));