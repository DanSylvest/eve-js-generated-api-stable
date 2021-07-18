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
    define(['ApiClient', 'model/GetFwLeaderboardsCharactersActiveTotalActiveTotal1', 'model/GetFwLeaderboardsCharactersLastWeekLastWeek1', 'model/GetFwLeaderboardsCharactersYesterdayYesterday1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsCharactersActiveTotalActiveTotal1'), require('./GetFwLeaderboardsCharactersLastWeekLastWeek1'), require('./GetFwLeaderboardsCharactersYesterdayYesterday1'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsCharactersVictoryPoints = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsCharactersActiveTotalActiveTotal1, root.EveSwaggerInterface.GetFwLeaderboardsCharactersLastWeekLastWeek1, root.EveSwaggerInterface.GetFwLeaderboardsCharactersYesterdayYesterday1);
  }
}(this, function(ApiClient, GetFwLeaderboardsCharactersActiveTotalActiveTotal1, GetFwLeaderboardsCharactersLastWeekLastWeek1, GetFwLeaderboardsCharactersYesterdayYesterday1) {
  'use strict';

  /**
   * The GetFwLeaderboardsCharactersVictoryPoints model module.
   * @module model/GetFwLeaderboardsCharactersVictoryPoints
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCharactersVictoryPoints</code>.
   * Top 100 rankings of pilots by victory points from yesterday, last week and in total
   * @alias module:model/GetFwLeaderboardsCharactersVictoryPoints
   * @class
   * @param activeTotal {Array.<module:model/GetFwLeaderboardsCharactersActiveTotalActiveTotal1>} Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @param lastWeek {Array.<module:model/GetFwLeaderboardsCharactersLastWeekLastWeek1>} Top 100 ranking of pilots by victory points in the past week
   * @param yesterday {Array.<module:model/GetFwLeaderboardsCharactersYesterdayYesterday1>} Top 100 ranking of pilots by victory points in the past day
   */
  var exports = function(activeTotal, lastWeek, yesterday) {
    this.activeTotal = activeTotal;
    this.lastWeek = lastWeek;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCharactersVictoryPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCharactersVictoryPoints} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCharactersVictoryPoints} The populated <code>GetFwLeaderboardsCharactersVictoryPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_total'))
        obj.activeTotal = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsCharactersActiveTotalActiveTotal1]);
      if (data.hasOwnProperty('last_week'))
        obj.lastWeek = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsCharactersLastWeekLastWeek1]);
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsCharactersYesterdayYesterday1]);
    }
    return obj;
  }

  /**
   * Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @member {Array.<module:model/GetFwLeaderboardsCharactersActiveTotalActiveTotal1>} activeTotal
   */
  exports.prototype.activeTotal = undefined;

  /**
   * Top 100 ranking of pilots by victory points in the past week
   * @member {Array.<module:model/GetFwLeaderboardsCharactersLastWeekLastWeek1>} lastWeek
   */
  exports.prototype.lastWeek = undefined;

  /**
   * Top 100 ranking of pilots by victory points in the past day
   * @member {Array.<module:model/GetFwLeaderboardsCharactersYesterdayYesterday1>} yesterday
   */
  exports.prototype.yesterday = undefined;


  return exports;

}));