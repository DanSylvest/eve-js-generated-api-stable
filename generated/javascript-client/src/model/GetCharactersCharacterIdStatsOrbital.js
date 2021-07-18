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
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsOrbital = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdStatsOrbital model module.
   * @module model/GetCharactersCharacterIdStatsOrbital
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsOrbital</code>.
   * orbital object
   * @alias module:model/GetCharactersCharacterIdStatsOrbital
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsOrbital</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsOrbital} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsOrbital} The populated <code>GetCharactersCharacterIdStatsOrbital</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('strike_characters_killed'))
        obj.strikeCharactersKilled = ApiClient.convertToType(data['strike_characters_killed'], 'Number');
      if (data.hasOwnProperty('strike_damage_to_players_armor_amount'))
        obj.strikeDamageToPlayersArmorAmount = ApiClient.convertToType(data['strike_damage_to_players_armor_amount'], 'Number');
      if (data.hasOwnProperty('strike_damage_to_players_shield_amount'))
        obj.strikeDamageToPlayersShieldAmount = ApiClient.convertToType(data['strike_damage_to_players_shield_amount'], 'Number');
    }
    return obj;
  }

  /**
   * strike_characters_killed integer
   * @member {Number} strikeCharactersKilled
   */
  exports.prototype.strikeCharactersKilled = undefined;

  /**
   * strike_damage_to_players_armor_amount integer
   * @member {Number} strikeDamageToPlayersArmorAmount
   */
  exports.prototype.strikeDamageToPlayersArmorAmount = undefined;

  /**
   * strike_damage_to_players_shield_amount integer
   * @member {Number} strikeDamageToPlayersShieldAmount
   */
  exports.prototype.strikeDamageToPlayersShieldAmount = undefined;

  return exports;

}));
