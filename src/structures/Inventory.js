
const { Collection, User } = require("discord.js");
const { ItemUtil } = require("../util/util");

class Inventory {

    /**
     * The inventory object of a Prisoner, used to store
     * items of both contraband and items of cosmetic use.
     * @param {User} owner the owner of the inventory.
     * @param {Object} options the options to initiate the inventory with.
     */

    constructor(owner, options = {empty: true, items: new Collection()}) {
        this.owner = owner;
        this.empty = options.empty;
        this.items = options.items;
    }

    /**
     * Removes all items of contraband that are within the inventory.
     * @returns {Promise<Inventory>}
     */

    removeContraband() {
        return new Promise((resolve, reject) => {
            if (!this.items.size > 0) {
                reject(new Error("there were no items to remove."));
            } else {
                this.items = this.items.filter(item => !item.contraband);
                resolve(this);
            }
        });
    } 

    /**
     * Add an item to the inventory, if it is validated as an actall item by the ItemUtil.
     * @param {Item} item the item to add the the inventory.
     * @returns {Promise<Inventory>}
     */

    addItem(item) {
        return new Promise((resolve, reject) => {
            if (!ItemUtil.isItem(item)) {
                reject(new Error("Invalid Item."));
            } else {
                if (this.items.has(item.id)) {
                    this.items.set(item.id, {count: this.items.get(item.id).count + 1});
                } else {
                    this.items.set(item.id, {count: 1});
                }
                resolve(this);
            }
        })
    }

    /**
     * removes an item from the inventory, if it is contained within.
     * @param {Item} item the item to remove from the the inventory.
     * @returns {Promise<Inventory>}
     */

    removeItem(item) {
        return new Promise((resolve, reject) => {

            if (!ItemUtil.isItem(item)) {
                reject(new Error("Invalid Item."));
            } else {
                if (!this.items.has(item.id)) {
                    reject(new Error("Item is not in the inventory."));
                } else {
                    this.items.delete(item.id);
                    resolve(this);
                }
            }

        });
    }

    /**
     * Empties the inventory and adds a little message.
     * @param {String} reason the reason the inventory was emptied.
     * @returns {Promise<Inventory>}
     */

    empty(reason = "your inventory has been emptied.") {
        return new Promise((resolve, reject) => {
            if (!this.items.size > 0) {
                reject(new Error("there were no items to remove."));
            } else {
                this.items.deleteAll();
                resolve(this);
            }
        });
    };   


}