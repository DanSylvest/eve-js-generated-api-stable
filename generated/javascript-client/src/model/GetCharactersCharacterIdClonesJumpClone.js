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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdClonesJumpClone = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdClonesJumpClone model module.
   * @module model/GetCharactersCharacterIdClonesJumpClone
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdClonesJumpClone</code>.
   * jump_clone object
   * @alias module:model/GetCharactersCharacterIdClonesJumpClone
   * @class
   * @param implants {Array.<Number>} implants array
   * @param jumpCloneId {Number} jump_clone_id integer
   * @param locationId {Number} location_id integer
   * @param locationType {module:model/GetCharactersCharacterIdClonesJumpClone.LocationTypeEnum} location_type string
   */
  var exports = function(implants, jumpCloneId, locationId, locationType) {
    this.implants = implants;
    this.jumpCloneId = jumpCloneId;
    this.locationId = locationId;
    this.locationType = locationType;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdClonesJumpClone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdClonesJumpClone} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdClonesJumpClone} The populated <code>GetCharactersCharacterIdClonesJumpClone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('implants'))
        obj.implants = ApiClient.convertToType(data['implants'], ['Number']);
      if (data.hasOwnProperty('jump_clone_id'))
        obj.jumpCloneId = ApiClient.convertToType(data['jump_clone_id'], 'Number');
      if (data.hasOwnProperty('location_id'))
        obj.locationId = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('location_type'))
        obj.locationType = ApiClient.convertToType(data['location_type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * implants array
   * @member {Array.<Number>} implants
   */
  exports.prototype.implants = undefined;

  /**
   * jump_clone_id integer
   * @member {Number} jumpCloneId
   */
  exports.prototype.jumpCloneId = undefined;

  /**
   * location_id integer
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * location_type string
   * @member {module:model/GetCharactersCharacterIdClonesJumpClone.LocationTypeEnum} locationType
   */
  exports.prototype.locationType = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;



  /**
   * Allowed values for the <code>locationType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationTypeEnum = {
    /**
     * value: "station"
     * @const
     */
    station: "station",

    /**
     * value: "structure"
     * @const
     */
    structure: "structure"
  };

  return exports;

}));
