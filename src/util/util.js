
const ItemIndex = require("./items");

const Structures = {
    item: require("../structures/Item"),
    inventory: require("../structures/Inventory")
}

const Classes = {
    corporal: require("../classes/Corporal"),
    prisoner: require("../classes/Prisoner"),
    warden  : require("../classes/Warden")
}

const Responses = require("./responses");

const ItemUtil = {

    isItem: (obejct) => { return object instanceof Structures.item && ItemIndex.meta[object.id]; },

}

const StrUtil = {

    replace: (string, options = {"" : ""}) => { Object.keys(options).forEach(key => { string.replace(key, options[key]); }); },

}

const ClassUtil = {
    isClass: (object) => { return object instanceof Structures.item && ItemIndex.meta[object.id]; }
}

module.exports = { ItemUtil, ItemIndex, Structures, Classes, Responses, StrUtil, ClassUtil };

module.exports.color = "#3498db";