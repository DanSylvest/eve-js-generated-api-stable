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
    root.EveSwaggerInterface.GetUniverseSystemsSystemIdPlanet = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetUniverseSystemsSystemIdPlanet model module.
   * @module model/GetUniverseSystemsSystemIdPlanet
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetUniverseSystemsSystemIdPlanet</code>.
   * planet object
   * @alias module:model/GetUniverseSystemsSystemIdPlanet
   * @class
   * @param planetId {Number} planet_id integer
   */
  var exports = function(planetId) {
    this.planetId = planetId;
  };

  /**
   * Constructs a <code>GetUniverseSystemsSystemIdPlanet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseSystemsSystemIdPlanet} obj Optional instance to populate.
   * @return {module:model/GetUniverseSystemsSystemIdPlanet} The populated <code>GetUniverseSystemsSystemIdPlanet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('asteroid_belts'))
        obj.asteroidBelts = ApiClient.convertToType(data['asteroid_belts'], ['Number']);
      if (data.hasOwnProperty('moons'))
        obj.moons = ApiClient.convertToType(data['moons'], ['Number']);
      if (data.hasOwnProperty('planet_id'))
        obj.planetId = ApiClient.convertToType(data['planet_id'], 'Number');
    }
    return obj;
  }

  /**
   * asteroid_belts array
   * @member {Array.<Number>} asteroidBelts
   */
  exports.prototype.asteroidBelts = undefined;

  /**
   * moons array
   * @member {Array.<Number>} moons
   */
  exports.prototype.moons = undefined;

  /**
   * planet_id integer
   * @member {Number} planetId
   */
  exports.prototype.planetId = undefined;


  return exports;

}));
