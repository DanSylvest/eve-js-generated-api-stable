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
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsPve = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdStatsPve model module.
   * @module model/GetCharactersCharacterIdStatsPve
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsPve</code>.
   * pve object
   * @alias module:model/GetCharactersCharacterIdStatsPve
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsPve</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsPve} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsPve} The populated <code>GetCharactersCharacterIdStatsPve</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dungeons_completed_agent'))
        obj.dungeonsCompletedAgent = ApiClient.convertToType(data['dungeons_completed_agent'], 'Number');
      if (data.hasOwnProperty('dungeons_completed_distribution'))
        obj.dungeonsCompletedDistribution = ApiClient.convertToType(data['dungeons_completed_distribution'], 'Number');
      if (data.hasOwnProperty('missions_succeeded'))
        obj.missionsSucceeded = ApiClient.convertToType(data['missions_succeeded'], 'Number');
      if (data.hasOwnProperty('missions_succeeded_epic_arc'))
        obj.missionsSucceededEpicArc = ApiClient.convertToType(data['missions_succeeded_epic_arc'], 'Number');
    }
    return obj;
  }

  /**
   * dungeons_completed_agent integer
   * @member {Number} dungeonsCompletedAgent
   */
  exports.prototype.dungeonsCompletedAgent = undefined;

  /**
   * dungeons_completed_distribution integer
   * @member {Number} dungeonsCompletedDistribution
   */
  exports.prototype.dungeonsCompletedDistribution = undefined;

  /**
   * missions_succeeded integer
   * @member {Number} missionsSucceeded
   */
  exports.prototype.missionsSucceeded = undefined;

  /**
   * missions_succeeded_epic_arc integer
   * @member {Number} missionsSucceededEpicArc
   */
  exports.prototype.missionsSucceededEpicArc = undefined;

  return exports;

}));
