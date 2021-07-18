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
    define(['ApiClient', 'model/GetCharactersCharacterIdClonesHomeLocation', 'model/GetCharactersCharacterIdClonesJumpClone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdClonesHomeLocation'), require('./GetCharactersCharacterIdClonesJumpClone'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdClonesOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdClonesHomeLocation, root.EveSwaggerInterface.GetCharactersCharacterIdClonesJumpClone);
  }
}(this, function(ApiClient, GetCharactersCharacterIdClonesHomeLocation, GetCharactersCharacterIdClonesJumpClone) {
  'use strict';

  /**
   * The GetCharactersCharacterIdClonesOk model module.
   * @module model/GetCharactersCharacterIdClonesOk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdClonesOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdClonesOk
   * @class
   * @param jumpClones {Array.<module:model/GetCharactersCharacterIdClonesJumpClone>} jump_clones array
   */
  var exports = function(jumpClones) {
    this.jumpClones = jumpClones;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdClonesOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdClonesOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdClonesOk} The populated <code>GetCharactersCharacterIdClonesOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('home_location'))
        obj.homeLocation = GetCharactersCharacterIdClonesHomeLocation.constructFromObject(data['home_location']);
      if (data.hasOwnProperty('jump_clones'))
        obj.jumpClones = ApiClient.convertToType(data['jump_clones'], [GetCharactersCharacterIdClonesJumpClone]);
      if (data.hasOwnProperty('last_clone_jump_date'))
        obj.lastCloneJumpDate = ApiClient.convertToType(data['last_clone_jump_date'], 'Date');
      if (data.hasOwnProperty('last_station_change_date'))
        obj.lastStationChangeDate = ApiClient.convertToType(data['last_station_change_date'], 'Date');
    }
    return obj;
  }

  /**
   * @member {module:model/GetCharactersCharacterIdClonesHomeLocation} homeLocation
   */
  exports.prototype.homeLocation = undefined;

  /**
   * jump_clones array
   * @member {Array.<module:model/GetCharactersCharacterIdClonesJumpClone>} jumpClones
   */
  exports.prototype.jumpClones = undefined;

  /**
   * last_clone_jump_date string
   * @member {Date} lastCloneJumpDate
   */
  exports.prototype.lastCloneJumpDate = undefined;

  /**
   * last_station_change_date string
   * @member {Date} lastStationChangeDate
   */
  exports.prototype.lastStationChangeDate = undefined;


  return exports;

}));
