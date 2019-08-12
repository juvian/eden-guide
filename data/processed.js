let chests = require('./drops.js').chests;
let crafts = require('./craftings.js').craftings;
let units = require('./units.js');
let items = require('./items.js');

crafts.forEach(craft => {
  if (items[craft.id] === undefined) console.log(craft.id);
  items[craft.id].crafts = items[craft.id].crafts || [];
  items[craft.id].crafts.push(craft);
});

chests.forEach(chest => {
  if (!chest.unit) {
    if(items[chest.id] === undefined) console.log(chest.id);
    items[chest.id].chest = chest;
    chest.parent = items[chest.id];
  } else {
    if(units[chest.id] === undefined) console.log(chest.id);
    units[chest.id].chest = chest;
    chest.parent = units[chest.id];
  }
  
  chest.drops.forEach(drop => {
    if (items[drop.id] === undefined) console.log(drop.id);
    items[drop.id].drops = items[drop.id].drops || [];
    items[drop.id].drops.push({chest: chest, chance: drop.chance});
  });  
});


for (let id in items) {
  if (items[id].disabled) delete items[id];
}

let types = new Set()

for (let id in items) {
  types.add(items[id].type);
}

types = Array.from(types);

module.exports = {items, chests, units, types};