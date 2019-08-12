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


let colortags = {"purple": "unique", "blue": "epic", "orange": "legendary", "red": "mythic", "god": "god"}

for (let id in items) {
  if (items[id].disabled) delete items[id];  
  else {
    let item = items[id];
      if (!item.tags) item.tags = [];
      if (colortags[item.color]) item.tags.push(colortags[item.color]);
      if (item.color == "red") {
        if (item.label.includes("+1")) item.tags.push("+1")
        else if (item.label.includes("+2")) item.tags.push("+2")
        else if (item.label.includes("+3")) item.tags.push("+3")
        else item.tags.push("+0")
      }
  }
}

let types = new Set()
let tags = new Set()

for (let id in items) {
  types.add(items[id].type);
  for (let tag of items[id].tags) {
    tags.add(tag.trim())
  }
}

types = Array.from(types);
tags = Array.from(tags);

module.exports = {items, chests, units, types, tags};