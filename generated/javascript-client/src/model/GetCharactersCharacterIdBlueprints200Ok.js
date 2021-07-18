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
    root.EveSwaggerInterface.GetCharactersCharacterIdBlueprints200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdBlueprints200Ok model module.
   * @module model/GetCharactersCharacterIdBlueprints200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdBlueprints200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdBlueprints200Ok
   * @class
   * @param itemId {Number} Unique ID for this item.
   * @param locationFlag {module:model/GetCharactersCharacterIdBlueprints200Ok.LocationFlagEnum} Type of the location_id
   * @param locationId {Number} References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
   * @param materialEfficiency {Number} Material Efficiency Level of the blueprint.
   * @param quantity {Number} A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   * @param runs {Number} Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   * @param timeEfficiency {Number} Time Efficiency Level of the blueprint.
   * @param typeId {Number} type_id integer
   */
  var exports = function(itemId, locationFlag, locationId, materialEfficiency, quantity, runs, timeEfficiency, typeId) {
    this.itemId = itemId;
    this.locationFlag = locationFlag;
    this.locationId = locationId;
    this.materialEfficiency = materialEfficiency;
    this.quantity = quantity;
    this.runs = runs;
    this.timeEfficiency = timeEfficiency;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdBlueprints200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdBlueprints200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdBlueprints200Ok} The populated <code>GetCharactersCharacterIdBlueprints200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.itemId = ApiClient.convertToType(data['item_id'], 'Number');
      if (data.hasOwnProperty('location_flag'))
        obj.locationFlag = ApiClient.convertToType(data['location_flag'], 'String');
      if (data.hasOwnProperty('location_id'))
        obj.locationId = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('material_efficiency'))
        obj.materialEfficiency = ApiClient.convertToType(data['material_efficiency'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('runs'))
        obj.runs = ApiClient.convertToType(data['runs'], 'Number');
      if (data.hasOwnProperty('time_efficiency'))
        obj.timeEfficiency = ApiClient.convertToType(data['time_efficiency'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * Unique ID for this item.
   * @member {Number} itemId
   */
  exports.prototype.itemId = undefined;

  /**
   * Type of the location_id
   * @member {module:model/GetCharactersCharacterIdBlueprints200Ok.LocationFlagEnum} locationFlag
   */
  exports.prototype.locationFlag = undefined;

  /**
   * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * Material Efficiency Level of the blueprint.
   * @member {Number} materialEfficiency
   */
  exports.prototype.materialEfficiency = undefined;

  /**
   * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   * @member {Number} runs
   */
  exports.prototype.runs = undefined;

  /**
   * Time Efficiency Level of the blueprint.
   * @member {Number} timeEfficiency
   */
  exports.prototype.timeEfficiency = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;



  /**
   * Allowed values for the <code>locationFlag</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationFlagEnum = {
    /**
     * value: "AutoFit"
     * @const
     */
    autoFit: "AutoFit",

    /**
     * value: "Cargo"
     * @const
     */
    cargo: "Cargo",

    /**
     * value: "CorpseBay"
     * @const
     */
    corpseBay: "CorpseBay",

    /**
     * value: "DroneBay"
     * @const
     */
    droneBay: "DroneBay",

    /**
     * value: "FleetHangar"
     * @const
     */
    fleetHangar: "FleetHangar",

    /**
     * value: "Deliveries"
     * @const
     */
    deliveries: "Deliveries",

    /**
     * value: "HiddenModifiers"
     * @const
     */
    hiddenModifiers: "HiddenModifiers",

    /**
     * value: "Hangar"
     * @const
     */
    hangar: "Hangar",

    /**
     * value: "HangarAll"
     * @const
     */
    hangarAll: "HangarAll",

    /**
     * value: "LoSlot0"
     * @const
     */
    loSlot0: "LoSlot0",

    /**
     * value: "LoSlot1"
     * @const
     */
    loSlot1: "LoSlot1",

    /**
     * value: "LoSlot2"
     * @const
     */
    loSlot2: "LoSlot2",

    /**
     * value: "LoSlot3"
     * @const
     */
    loSlot3: "LoSlot3",

    /**
     * value: "LoSlot4"
     * @const
     */
    loSlot4: "LoSlot4",

    /**
     * value: "LoSlot5"
     * @const
     */
    loSlot5: "LoSlot5",

    /**
     * value: "LoSlot6"
     * @const
     */
    loSlot6: "LoSlot6",

    /**
     * value: "LoSlot7"
     * @const
     */
    loSlot7: "LoSlot7",

    /**
     * value: "MedSlot0"
     * @const
     */
    medSlot0: "MedSlot0",

    /**
     * value: "MedSlot1"
     * @const
     */
    medSlot1: "MedSlot1",

    /**
     * value: "MedSlot2"
     * @const
     */
    medSlot2: "MedSlot2",

    /**
     * value: "MedSlot3"
     * @const
     */
    medSlot3: "MedSlot3",

    /**
     * value: "MedSlot4"
     * @const
     */
    medSlot4: "MedSlot4",

    /**
     * value: "MedSlot5"
     * @const
     */
    medSlot5: "MedSlot5",

    /**
     * value: "MedSlot6"
     * @const
     */
    medSlot6: "MedSlot6",

    /**
     * value: "MedSlot7"
     * @const
     */
    medSlot7: "MedSlot7",

    /**
     * value: "HiSlot0"
     * @const
     */
    hiSlot0: "HiSlot0",

    /**
     * value: "HiSlot1"
     * @const
     */
    hiSlot1: "HiSlot1",

    /**
     * value: "HiSlot2"
     * @const
     */
    hiSlot2: "HiSlot2",

    /**
     * value: "HiSlot3"
     * @const
     */
    hiSlot3: "HiSlot3",

    /**
     * value: "HiSlot4"
     * @const
     */
    hiSlot4: "HiSlot4",

    /**
     * value: "HiSlot5"
     * @const
     */
    hiSlot5: "HiSlot5",

    /**
     * value: "HiSlot6"
     * @const
     */
    hiSlot6: "HiSlot6",

    /**
     * value: "HiSlot7"
     * @const
     */
    hiSlot7: "HiSlot7",

    /**
     * value: "AssetSafety"
     * @const
     */
    assetSafety: "AssetSafety",

    /**
     * value: "Locked"
     * @const
     */
    locked: "Locked",

    /**
     * value: "Unlocked"
     * @const
     */
    unlocked: "Unlocked",

    /**
     * value: "Implant"
     * @const
     */
    implant: "Implant",

    /**
     * value: "QuafeBay"
     * @const
     */
    quafeBay: "QuafeBay",

    /**
     * value: "RigSlot0"
     * @const
     */
    rigSlot0: "RigSlot0",

    /**
     * value: "RigSlot1"
     * @const
     */
    rigSlot1: "RigSlot1",

    /**
     * value: "RigSlot2"
     * @const
     */
    rigSlot2: "RigSlot2",

    /**
     * value: "RigSlot3"
     * @const
     */
    rigSlot3: "RigSlot3",

    /**
     * value: "RigSlot4"
     * @const
     */
    rigSlot4: "RigSlot4",

    /**
     * value: "RigSlot5"
     * @const
     */
    rigSlot5: "RigSlot5",

    /**
     * value: "RigSlot6"
     * @const
     */
    rigSlot6: "RigSlot6",

    /**
     * value: "RigSlot7"
     * @const
     */
    rigSlot7: "RigSlot7",

    /**
     * value: "ShipHangar"
     * @const
     */
    shipHangar: "ShipHangar",

    /**
     * value: "SpecializedFuelBay"
     * @const
     */
    specializedFuelBay: "SpecializedFuelBay",

    /**
     * value: "SpecializedOreHold"
     * @const
     */
    specializedOreHold: "SpecializedOreHold",

    /**
     * value: "SpecializedGasHold"
     * @const
     */
    specializedGasHold: "SpecializedGasHold",

    /**
     * value: "SpecializedMineralHold"
     * @const
     */
    specializedMineralHold: "SpecializedMineralHold",

    /**
     * value: "SpecializedSalvageHold"
     * @const
     */
    specializedSalvageHold: "SpecializedSalvageHold",

    /**
     * value: "SpecializedShipHold"
     * @const
     */
    specializedShipHold: "SpecializedShipHold",

    /**
     * value: "SpecializedSmallShipHold"
     * @const
     */
    specializedSmallShipHold: "SpecializedSmallShipHold",

    /**
     * value: "SpecializedMediumShipHold"
     * @const
     */
    specializedMediumShipHold: "SpecializedMediumShipHold",

    /**
     * value: "SpecializedLargeShipHold"
     * @const
     */
    specializedLargeShipHold: "SpecializedLargeShipHold",

    /**
     * value: "SpecializedIndustrialShipHold"
     * @const
     */
    specializedIndustrialShipHold: "SpecializedIndustrialShipHold",

    /**
     * value: "SpecializedAmmoHold"
     * @const
     */
    specializedAmmoHold: "SpecializedAmmoHold",

    /**
     * value: "SpecializedCommandCenterHold"
     * @const
     */
    specializedCommandCenterHold: "SpecializedCommandCenterHold",

    /**
     * value: "SpecializedPlanetaryCommoditiesHold"
     * @const
     */
    specializedPlanetaryCommoditiesHold: "SpecializedPlanetaryCommoditiesHold",

    /**
     * value: "SpecializedMaterialBay"
     * @const
     */
    specializedMaterialBay: "SpecializedMaterialBay",

    /**
     * value: "SubSystemSlot0"
     * @const
     */
    subSystemSlot0: "SubSystemSlot0",

    /**
     * value: "SubSystemSlot1"
     * @const
     */
    subSystemSlot1: "SubSystemSlot1",

    /**
     * value: "SubSystemSlot2"
     * @const
     */
    subSystemSlot2: "SubSystemSlot2",

    /**
     * value: "SubSystemSlot3"
     * @const
     */
    subSystemSlot3: "SubSystemSlot3",

    /**
     * value: "SubSystemSlot4"
     * @const
     */
    subSystemSlot4: "SubSystemSlot4",

    /**
     * value: "SubSystemSlot5"
     * @const
     */
    subSystemSlot5: "SubSystemSlot5",

    /**
     * value: "SubSystemSlot6"
     * @const
     */
    subSystemSlot6: "SubSystemSlot6",

    /**
     * value: "SubSystemSlot7"
     * @const
     */
    subSystemSlot7: "SubSystemSlot7",

    /**
     * value: "FighterBay"
     * @const
     */
    fighterBay: "FighterBay",

    /**
     * value: "FighterTube0"
     * @const
     */
    fighterTube0: "FighterTube0",

    /**
     * value: "FighterTube1"
     * @const
     */
    fighterTube1: "FighterTube1",

    /**
     * value: "FighterTube2"
     * @const
     */
    fighterTube2: "FighterTube2",

    /**
     * value: "FighterTube3"
     * @const
     */
    fighterTube3: "FighterTube3",

    /**
     * value: "FighterTube4"
     * @const
     */
    fighterTube4: "FighterTube4",

    /**
     * value: "Module"
     * @const
     */
    module: "Module"
  };

  return exports;

}));
