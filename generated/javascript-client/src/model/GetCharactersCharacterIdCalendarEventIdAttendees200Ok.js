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
    root.EveSwaggerInterface.GetCharactersCharacterIdCalendarEventIdAttendees200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdCalendarEventIdAttendees200Ok model module.
   * @module model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdCalendarEventIdAttendees200Ok</code>.
   * character_id and response of an attendee
   * @alias module:model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdCalendarEventIdAttendees200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok} The populated <code>GetCharactersCharacterIdCalendarEventIdAttendees200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('character_id'))
        obj.characterId = ApiClient.convertToType(data['character_id'], 'Number');
      if (data.hasOwnProperty('event_response'))
        obj.eventResponse = ApiClient.convertToType(data['event_response'], 'String');
    }
    return obj;
  }

  /**
   * character_id integer
   * @member {Number} characterId
   */
  exports.prototype.characterId = undefined;

  /**
   * event_response string
   * @member {module:model/GetCharactersCharacterIdCalendarEventIdAttendees200Ok.EventResponseEnum} eventResponse
   */
  exports.prototype.eventResponse = undefined;



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
