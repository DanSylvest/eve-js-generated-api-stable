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
    root.EveSwaggerInterface.GetCharactersCharacterIdFatigueOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdFatigueOk model module.
   * @module model/GetCharactersCharacterIdFatigueOk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdFatigueOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdFatigueOk
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdFatigueOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdFatigueOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdFatigueOk} The populated <code>GetCharactersCharacterIdFatigueOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('jump_fatigue_expire_date'))
        obj.jumpFatigueExpireDate = ApiClient.convertToType(data['jump_fatigue_expire_date'], 'Date');
      if (data.hasOwnProperty('last_jump_date'))
        obj.lastJumpDate = ApiClient.convertToType(data['last_jump_date'], 'Date');
      if (data.hasOwnProperty('last_update_date'))
        obj.lastUpdateDate = ApiClient.convertToType(data['last_update_date'], 'Date');
    }
    return obj;
  }

  /**
   * Character's jump fatigue expiry
   * @member {Date} jumpFatigueExpireDate
   */
  exports.prototype.jumpFatigueExpireDate = undefined;

  /**
   * Character's last jump activation
   * @member {Date} lastJumpDate
   */
  exports.prototype.lastJumpDate = undefined;

  /**
   * Character's last jump update
   * @member {Date} lastUpdateDate
   */
  exports.prototype.lastUpdateDate = undefined;


  return exports;

}));
