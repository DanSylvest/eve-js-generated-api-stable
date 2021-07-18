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
    root.EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdCalendar200Ok model module.
   * @module model/GetCharactersCharacterIdCalendar200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdCalendar200Ok</code>.
   * event
   * @alias module:model/GetCharactersCharacterIdCalendar200Ok
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdCalendar200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdCalendar200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdCalendar200Ok} The populated <code>GetCharactersCharacterIdCalendar200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('event_date'))
        obj.eventDate = ApiClient.convertToType(data['event_date'], 'Date');
      if (data.hasOwnProperty('event_id'))
        obj.eventId = ApiClient.convertToType(data['event_id'], 'Number');
      if (data.hasOwnProperty('event_response'))
        obj.eventResponse = ApiClient.convertToType(data['event_response'], 'String');
      if (data.hasOwnProperty('importance'))
        obj.importance = ApiClient.convertToType(data['importance'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * event_date string
   * @member {Date} eventDate
   */
  exports.prototype.eventDate = undefined;

  /**
   * event_id integer
   * @member {Number} eventId
   */
  exports.prototype.eventId = undefined;

  /**
   * event_response string
   * @member {module:model/GetCharactersCharacterIdCalendar200Ok.EventResponseEnum} eventResponse
   */
  exports.prototype.eventResponse = undefined;

  /**
   * importance integer
   * @member {Number} importance
   */
  exports.prototype.importance = undefined;

  /**
   * title string
   * @member {String} title
   */
  exports.prototype.title = undefined;



  /**
   * Allowed values for the <code>eventResponse</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventResponseEnum = {
    /**
     * value: "declined"
     * @const
     */
    declined: "declined",

    /**
     * value: "not_responded"
     * @const
     */
    notResponded: "not_responded",

    /**
     * value: "accepted"
     * @const
     */
    accepted: "accepted",

    /**
     * value: "tentative"
     * @const
     */
    tentative: "tentative"
  };

  return exports;

}));
