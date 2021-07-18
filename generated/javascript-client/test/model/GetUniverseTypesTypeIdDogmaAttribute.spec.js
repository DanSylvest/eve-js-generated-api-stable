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
    describe('GetUniverseTypesTypeIdDogmaAttribute', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetUniverseTypesTypeIdDogmaAttribute();
      });

      it('should create an instance of GetUniverseTypesTypeIdDogmaAttribute', function() {
        // TODO: update the code to test GetUniverseTypesTypeIdDogmaAttribute
        expect(instance).to.be.a(EveSwaggerInterface.GetUniverseTypesTypeIdDogmaAttribute);
      });

      it('should have the property attributeId (base name: "attribute_id")', function() {
        // TODO: update the code to test the property attributeId
        expect(instance).to.have.property('attributeId');
        // expect(instance.attributeId).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
