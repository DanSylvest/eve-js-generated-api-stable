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
    describe('PostCharactersCharacterIdMailRecipient', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.PostCharactersCharacterIdMailRecipient();
      });

      it('should create an instance of PostCharactersCharacterIdMailRecipient', function() {
        // TODO: update the code to test PostCharactersCharacterIdMailRecipient
        expect(instance).to.be.a(EveSwaggerInterface.PostCharactersCharacterIdMailRecipient);
      });

      it('should have the property recipientId (base name: "recipient_id")', function() {
        // TODO: update the code to test the property recipientId
        expect(instance).to.have.property('recipientId');
        // expect(instance.recipientId).to.be(expectedValueLiteral);
      });

      it('should have the property recipientType (base name: "recipient_type")', function() {
        // TODO: update the code to test the property recipientType
        expect(instance).to.have.property('recipientType');
        // expect(instance.recipientType).to.be(expectedValueLiteral);
      });

    });
  });

}));
