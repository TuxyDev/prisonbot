
const { ItemIndex } = require("../util/util");

class Item {

    /**
     * Item of contraband and Item of use.
     * @param {String} name 
     * @param {Object} data
     */

    constructor(id, owner) {
        this.owner = owner;
        this.id = id;
        this.rarity = ItemIndex.meta[id].rarity;
        this.name = ItemIndex.meta[id].name;
        this.image = ItemIndex.images[id];
        this.cotraband = ItemIndex.meta[id].type === "contraband";
    }

    dispose() {

    }

    rename(newName) {
        this.name = newName;
    }

}

module.exports = {Item};