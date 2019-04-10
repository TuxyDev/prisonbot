
/**
 * @params :
 *  %p => prisoner
 *  %t => time
 *  %c => corporal, warden or any other higher ranks.
 */

module.exports = {
    "EAT"     : ["Served food for %p, who's next?"],
    "ARREST"  : ["%p took the wrong turn, and has been arrested and sentanced for %t in solitary confinement."],
    "TRADING" : ["Goddamnit, %p has been caught trading and has been stripped & sent to juvenile detention for %t."],
    "SHOOT"   : ["kapow! %p went out with a bang. (shot by %c)"]
};