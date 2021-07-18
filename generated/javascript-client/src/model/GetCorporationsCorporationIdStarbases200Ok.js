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
    root.EveSwaggerInterface.GetCorporationsCorporationIdStarbases200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdStarbases200Ok model module.
   * @module model/GetCorporationsCorporationIdStarbases200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdStarbases200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdStarbases200Ok
   * @class
   * @param starbaseId {Number} Unique ID for this starbase (POS)
   * @param systemId {Number} The solar system this starbase (POS) is in, unanchored POSes have this information
   * @param typeId {Number} Starbase (POS) type
   */
  var exports = function(starbaseId, systemId, typeId) {
    this.starbaseId = starbaseId;
    this.systemId = systemId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdStarbases200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdStarbases200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdStarbases200Ok} The populated <code>GetCorporationsCorporationIdStarbases200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('moon_id'))
        obj.moonId = ApiClient.convertToType(data['moon_id'], 'Number');
      if (data.hasOwnProperty('onlined_since'))
        obj.onlinedSince = ApiClient.convertToType(data['onlined_since'], 'Date');
      if (data.hasOwnProperty('reinforced_until'))
        obj.reinforcedUntil = ApiClient.convertToType(data['reinforced_until'], 'Date');
      if (data.hasOwnProperty('starbase_id'))
        obj.starbaseId = ApiClient.convertToType(data['starbase_id'], 'Number');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
      if (data.hasOwnProperty('unanchor_at'))
        obj.unanchorAt = ApiClient.convertToType(data['unanchor_at'], 'Date');
    }
    return obj;
  }

  /**
   * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
   * @member {Number} moonId
   */
  exports.prototype.moonId = undefined;

  /**
   * When the POS onlined, for starbases (POSes) in online state
   * @member {Date} onlinedSince
   */
  exports.prototype.onlinedSince = undefined;

  /**
   * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
   * @member {Date} reinforcedUntil
   */
  exports.prototype.reinforcedUntil = undefined;

  /**
   * Unique ID for this starbase (POS)
   * @member {Number} starbaseId
   */
  exports.prototype.starbaseId = undefined;

  /**
   * state string
   * @member {module:model/GetCorporationsCorporationIdStarbases200Ok.StateEnum} state
   */
  exports.prototype.state = undefined;

  /**
   * The solar system this starbase (POS) is in, unanchored POSes have this information
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;

  /**
   * Starbase (POS) type
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;

  /**
   * When the POS started unanchoring, for starbases (POSes) in unanchoring state
   * @member {Date} unanchorAt
   */
  exports.prototype.unanchorAt = undefined;



  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "offline"
     * @const
     */
    offline: "offline",

    /**
     * value: "online"
     * @const
     */
    online: "online",

    /**
     * value: "onlining"
     * @const
     */
    onlining: "onlining",

    /**
     * value: "reinforced"
     * @const
     */
    reinforced: "reinforced",

    /**
     * value: "unanchoring"
     * @const
     */
    unanchoring: "unanchoring"
  };

  return exports;

}));
