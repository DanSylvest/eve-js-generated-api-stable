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
    define(['ApiClient', 'model/GetCharactersCharacterIdPlanetsPlanetIdLink', 'model/GetCharactersCharacterIdPlanetsPlanetIdPin', 'model/GetCharactersCharacterIdPlanetsPlanetIdRoute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdPlanetsPlanetIdLink'), require('./GetCharactersCharacterIdPlanetsPlanetIdPin'), require('./GetCharactersCharacterIdPlanetsPlanetIdRoute'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdLink, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdRoute);
  }
}(this, function(ApiClient, GetCharactersCharacterIdPlanetsPlanetIdLink, GetCharactersCharacterIdPlanetsPlanetIdPin, GetCharactersCharacterIdPlanetsPlanetIdRoute) {
  'use strict';

  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdOk model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdOk
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdOk
   * @class
   * @param links {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdLink>} links array
   * @param pins {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdPin>} pins array
   * @param routes {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute>} routes array
   */
  var exports = function(links, pins, routes) {
    this.links = links;
    this.pins = pins;
    this.routes = routes;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdOk} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [GetCharactersCharacterIdPlanetsPlanetIdLink]);
      if (data.hasOwnProperty('pins'))
        obj.pins = ApiClient.convertToType(data['pins'], [GetCharactersCharacterIdPlanetsPlanetIdPin]);
      if (data.hasOwnProperty('routes'))
        obj.routes = ApiClient.convertToType(data['routes'], [GetCharactersCharacterIdPlanetsPlanetIdRoute]);
    }
    return obj;
  }

  /**
   * links array
   * @member {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdLink>} links
   */
  exports.prototype.links = undefined;

  /**
   * pins array
   * @member {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdPin>} pins
   */
  exports.prototype.pins = undefined;

  /**
   * routes array
   * @member {Array.<module:model/GetCharactersCharacterIdPlanetsPlanetIdRoute>} routes
   */
  exports.prototype.routes = undefined;


  return exports;

}));
