let translator = require('./translations.js');
let translate = translator.translate;
let items = require('./itemdata.js');

class Item {
  constructor(item) {
    Object.assign(this, item);
  }
  
  html(qty) {
    qty = qty || 1;
    let info = this.info();
    let drops = this.dropsHtml();
    let txt = info + (info.trim() && drops.trim() ? "<br/>" : "") + drops;
    return `<span class="${this.color} item-tooltip" data-placement="bottom" data-toggle="tooltip" data-html="true" title="${txt}">${this.translatedLabel() + (qty > 1 ? ' x' + qty : '')}</span>`;
  }
  
  info() {
    let template = this.statsHtml();
    template += this.effectsHtml();
    template += this.statsPointsHtml();
    template += (this.bugged ? translate('bugs') : '');
    
    return template.endsWith("<br/>") ? template.substring(0, template.lastIndexOf("<br/>")) : template;
  }
  
  statsHtml() {
    let txt =  "";
    
    if (this.stats) {
      txt += "<span class = 'capitalize'>"
      for (var stat in this.stats) {
        txt += this.formatStat(stat, this.stats[stat]) + '<br/>';
      }
      txt += "</span>"
    }
    
    return txt;
  }
  
  effectsHtml() {
    let effects = this.translatedEffects();
    return effects == null ? "" : effects.join("<br/>")
  }
  
  translatedEffects() {
    return translator.lang() == "eng" ? this.effects : this.k_effects;
  }
  
  translatedLabel() {
    return translator.lang() == "eng" ? this.label : this.k_label;
  }
  
  statsPointsHtml() {
    return this.stats_points == null ? "" : ("<br/>" + translate("gives") + " " + this.stats_points + " "  + translate("stats points"))
  }  
  
  dropsArray() {
    return this.drops === undefined ? [] : this.drops;
  }
  
  dropsHtml() {
    if (this.chest) {
      let drops = this.chest.drops.map(obj => ({item: items[obj.id], chance: obj.chance}));
      return "Drops<br/>" + drops.map(drop => `${drop.item.translatedLabel()} (${drop.chance} % ${translate('chance')})`).join("<br/>")
    }
    let groups = this.dropsArray().reduce((all, cur) => {
      let key = cur.chest.parent.translatedLabel() + cur.chance
      all[key] = (all[key] || {count: 0, drop: cur});
      all[key].count += 1
      return all;
    }, {});
    return Object.keys(groups).map(key => `${groups[key].drop.chest.parent.translatedLabel()} ${groups[key].count == 1 ? '' : 'x' + groups[key].count} (${groups[key].drop.chance} % ${translate('chance')})`).join("<br/>");
  }
  
  formatStat(stat, val) {
      if (stat == "atk") return translate("attack") + " : +" + val;
      else if (stat == "int") return translate("intelligence") + " : +" + val;
      else if (stat == "agi") return translate("agility") + " : +" + val;
      else if (stat == "str") return translate("strength") + " : +" + val;
      else if (stat == "damage_taken") return translate("damage taken") + " : " + (val >= 0 ? "+" : "") + val + "%";
      else if (stat == "attack_speed") return translate("attack speed") + " : +" + val + "%";
      else if (stat == "damage_increase") return translate("damage increase") + " : +" + val + "%";
      else if (stat == "hp") return translate("HP") + " : +"+val;
      else if (stat == "mp") return translate("MP") + " : +"+val;
      else if (stat == "movement_speed") return translate("movement speed") + " : +"+val+ "%";
      else if (stat == "hp_regen") return translate("HP regeneration") + " : +"+val + " " + translate("per second");
      else if (stat == "hp_regen_percent") return translate("HP regeneration") + ": +"+val + "% " + translate("max HP per second");
      else if (stat == "armor") return translate("armor") +" : +" +val;
      else if (stat == "max_health") return translate("max HP") + " : +" + val + "%";
      else if (stat == "enemy_armor") return translate("enemy armor") + " : " + val + "%"; 
      else if (stat == "enemy_speed") return translate("enemy speed") + " : " + val + "%";
      else if (stat == "magic_resistance") return translate("magic resistance") + " : +" + val + "%";
      else if (stat == "max_int") return translate("intelligence increase") + " : +" + val + "%";    
      else if (stat == "critical_hit") return this.stats["critical_hit_chance"] + '%' + translate('chance') + ' x' + val + " " + translate("critical hit")
      else if (stat == 'mps') return translate('mps-text').replace("{0}", 'x0.' + this.stats['mps'])
      else if (stat == 'attack_str') return translate('attack-str').replace("{0}", this.stats['attack_real'])
      else if (stat == 'attack_str_agi') return translate('attack-str-agi').replace("{0}", this.stats['attack_real'])
      else if (stat == 'attack_agi') return translate('attack-agi').replace("{0}", this.stats['attack_real'])
      else if (stat == 'attack_str_int_real') return translate('attack-str-int').replace("{0}", this.stats['attack_str_int_real'])
      else if (stat == 'contract') {
        return this.stats['contract'] < 0.001 ? translate('attack-mana').replace("{0}", this.stats['contract'] * 1000000) : translate('attack-contract').replace("{0}", this.stats['contract'] * 100)
      }
      else if (stat == 'attack_int_real') return translate('attack-int').replace("{0}", this.stats['attack_int_real'])
      else return ''  
  }
  
  materials() {
    return this.crafts ? this.crafts[0] : {items: []};
  }
  
  tree (qty) {
      qty = qty || 1;
      var materials = this.materials().items.reduce(function(all, current) {
          all[current] = all[current] || 0;
          all[current] += 1;
          return all;
        }, {});
      return {
        innerHTML : this.html(qty),
        children : Object.keys(materials).map(key => items[key].tree(materials[key]))
      }
    }
}

for (let id in items) {
  items[id] = new Item(items[id]);
  items[id].id = id; 
}

module.exports = items;

