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
    root.EveSwaggerInterface.GetUniverseFactions200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetUniverseFactions200Ok model module.
   * @module model/GetUniverseFactions200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetUniverseFactions200Ok</code>.
   * 200 ok object
   * @alias module:model/GetUniverseFactions200Ok
   * @class
   * @param description {String} description string
   * @param factionId {Number} faction_id integer
   * @param isUnique {Boolean} is_unique boolean
   * @param name {String} name string
   * @param sizeFactor {Number} size_factor number
   * @param stationCount {Number} station_count integer
   * @param stationSystemCount {Number} station_system_count integer
   */
  var exports = function(description, factionId, isUnique, name, sizeFactor, stationCount, stationSystemCount) {
    this.description = description;
    this.factionId = factionId;
    this.isUnique = isUnique;
    this.name = name;
    this.sizeFactor = sizeFactor;
    this.stationCount = stationCount;
    this.stationSystemCount = stationSystemCount;
  };

  /**
   * Constructs a <code>GetUniverseFactions200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseFactions200Ok} obj Optional instance to populate.
   * @return {module:model/GetUniverseFactions200Ok} The populated <code>GetUniverseFactions200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('corporation_id'))
        obj.corporationId = ApiClient.convertToType(data['corporation_id'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('faction_id'))
        obj.factionId = ApiClient.convertToType(data['faction_id'], 'Number');
      if (data.hasOwnProperty('is_unique'))
        obj.isUnique = ApiClient.convertToType(data['is_unique'], 'Boolean');
      if (data.hasOwnProperty('militia_corporation_id'))
        obj.militiaCorporationId = ApiClient.convertToType(data['militia_corporation_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('size_factor'))
        obj.sizeFactor = ApiClient.convertToType(data['size_factor'], 'Number');
      if (data.hasOwnProperty('solar_system_id'))
        obj.solarSystemId = ApiClient.convertToType(data['solar_system_id'], 'Number');
      if (data.hasOwnProperty('station_count'))
        obj.stationCount = ApiClient.convertToType(data['station_count'], 'Number');
      if (data.hasOwnProperty('station_system_count'))
        obj.stationSystemCount = ApiClient.convertToType(data['station_system_count'], 'Number');
    }
    return obj;
  }

  /**
   * corporation_id integer
   * @member {Number} corporationId
   */
  exports.prototype.corporationId = undefined;

  /**
   * description string
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * faction_id integer
   * @member {Number} factionId
   */
  exports.prototype.factionId = undefined;

  /**
   * is_unique boolean
   * @member {Boolean} isUnique
   */
  exports.prototype.isUnique = undefined;

  /**
   * militia_corporation_id integer
   * @member {Number} militiaCorporationId
   */
  exports.prototype.militiaCorporationId = undefined;

  /**
   * name string
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * size_factor number
   * @member {Number} sizeFactor
   */
  exports.prototype.sizeFactor = undefined;

  /**
   * solar_system_id integer
   * @member {Number} solarSystemId
   */
  exports.prototype.solarSystemId = undefined;

  /**
   * station_count integer
   * @member {Number} stationCount
   */
  exports.prototype.stationCount = undefined;

  /**
   * station_system_count integer
   * @member {Number} stationSystemCount
   */
  exports.prototype.stationSystemCount = undefined;


  return exports;

}));
