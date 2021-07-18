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
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdPlanets200Ok model module.
   * @module model/GetCharactersCharacterIdPlanets200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanets200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdPlanets200Ok
   * @class
   * @param lastUpdate {Date} last_update string
   * @param numPins {Number} num_pins integer
   * @param ownerId {Number} owner_id integer
   * @param planetId {Number} planet_id integer
   * @param planetType {module:model/GetCharactersCharacterIdPlanets200Ok.PlanetTypeEnum} planet_type string
   * @param solarSystemId {Number} solar_system_id integer
   * @param upgradeLevel {Number} upgrade_level integer
   */
  var exports = function(lastUpdate, numPins, ownerId, planetId, planetType, solarSystemId, upgradeLevel) {
    this.lastUpdate = lastUpdate;
    this.numPins = numPins;
    this.ownerId = ownerId;
    this.planetId = planetId;
    this.planetType = planetType;
    this.solarSystemId = solarSystemId;
    this.upgradeLevel = upgradeLevel;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanets200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanets200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanets200Ok} The populated <code>GetCharactersCharacterIdPlanets200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_update'))
        obj.lastUpdate = ApiClient.convertToType(data['last_update'], 'Date');
      if (data.hasOwnProperty('num_pins'))
        obj.numPins = ApiClient.convertToType(data['num_pins'], 'Number');
      if (data.hasOwnProperty('owner_id'))
        obj.ownerId = ApiClient.convertToType(data['owner_id'], 'Number');
      if (data.hasOwnProperty('planet_id'))
        obj.planetId = ApiClient.convertToType(data['planet_id'], 'Number');
      if (data.hasOwnProperty('planet_type'))
        obj.planetType = ApiClient.convertToType(data['planet_type'], 'String');
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('upgrade_level'))
        obj.upgradeLevel = ApiClient.convertToType(data['upgrade_level'], 'Number');
    }
    return obj;
  }

  /**
   * last_update string
   * @member {Date} lastUpdate
   */
  exports.prototype.lastUpdate = undefined;

  /**
   * num_pins integer
   * @member {Number} numPins
   */
  exports.prototype.numPins = undefined;

  /**
   * owner_id integer
   * @member {Number} ownerId
   */
  exports.prototype.ownerId = undefined;

  /**
   * planet_id integer
   * @member {Number} planetId
   */
  exports.prototype.planetId = undefined;

  /**
   * planet_type string
   * @member {module:model/GetCharactersCharacterIdPlanets200Ok.PlanetTypeEnum} planetType
   */
  exports.prototype.planetType = undefined;

  /**
   * solar_system_id integer
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * upgrade_level integer
   * @member {Number} upgradeLevel
   */
  exports.prototype.upgradeLevel = undefined;



  /**
   * Allowed values for the <code>planetType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PlanetTypeEnum = {
    /**
     * value: "temperate"
     * @const
     */
    temperate: "temperate",

    /**
     * value: "barren"
     * @const
     */
    barren: "barren",

    /**
     * value: "oceanic"
     * @const
     */
    oceanic: "oceanic",

    /**
     * value: "ice"
     * @const
     */
    ice: "ice",

    /**
     * value: "gas"
     * @const
     */
    gas: "gas",

    /**
     * value: "lava"
     * @const
     */
    lava: "lava",

    /**
     * value: "storm"
     * @const
     */
    storm: "storm",

    /**
     * value: "plasma"
     * @const
     */
    plasma: "plasma"
  };

  return exports;

}));
