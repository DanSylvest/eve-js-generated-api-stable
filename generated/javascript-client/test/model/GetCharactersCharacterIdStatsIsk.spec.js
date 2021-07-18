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
    describe('GetCharactersCharacterIdStatsIsk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsIsk();
      });

      it('should create an instance of GetCharactersCharacterIdStatsIsk', function() {
        // TODO: update the code to test GetCharactersCharacterIdStatsIsk
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsIsk);
      });

      it('should have the property _in (base name: "in")', function() {
        // TODO: update the code to test the property _in
        expect(instance).to.have.property('_in');
        // expect(instance._in).to.be(expectedValueLiteral);
      });

      it('should have the property out (base name: "out")', function() {
        // TODO: update the code to test the property out
        expect(instance).to.have.property('out');
        // expect(instance.out).to.be(expectedValueLiteral);
      });

    });
  });

}));
