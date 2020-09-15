class BarbarianCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 12;
    this.hp = 12 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 12];
    this.actions = [{name: "Rage Attack", attack: 8, damage: [2,12]}]
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [{healthPotion: 1}];
    this.img = "https://i.pinimg.com/736x/ca/f3/26/caf3269770ab71cf0abd3e85f14aaf86.jpg";
  }
}

class BardCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 8;
    this.hp = 8 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [20, 20];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/b7/0e/d6/b70ed6eea7b09eea2d6612ddd099f188.png";
  }
}

class ClericCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 8;
    this.hp = 8 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 6];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/05/Cleric-Two.jpg";
  }
}

class DruidCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 8;
    this.hp = 8 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i2.wp.com/nerdarchy.com/wp-content/uploads/2015/11/PZO1121-ElfDruid.jpg?resize=774%2C1000&ssl=1";
  }
}

class FighterCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 10;
    this.hp = 10 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 8];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://vignette.wikia.nocookie.net/eladriells-dd/images/f/f4/Fighter.jpg/revision/latest?cb=20190324022153";
  }
}

class MonkCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 8;
    this.hp = 8 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/03/monk-five.jpg";
  }
}

class PaladinCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 10;
    this.hp = 10 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 6];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/03/Paladin-Two-569x1024.png";
  }
}

class RangerCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 10;
    this.hp = 10 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 6];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/04/ranger-two.jpg";
  }
}

class RogueCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 8;
    this.hp = 8 + hpBonus;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/21/2d/71/212d710a1ce457d541cfaa5345534851.png";
  }
}

class SorcererCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 6;
    this.hp = 6 + hpBonus;
    this.armorClass = armorClass;
    this.attack = 30 + attBonus;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/b1/ce/a3/b1cea385f37b7c271c18da08b0bf574e.png";
  }
}

class WarlockCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 8;
    this.hp = 8 + hpBonus;
    this.armorClass = armorClass;
    this.attack = 30 + attBonus;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://wizardofthetavern.com/wp-content/uploads/2019/05/warlock.jpg";
  }
}

class WizardCharacter {
  constructor(name, armorClass, hpBonus, attBonus){
    this.name = name;
    this.maxHP = 6;
    this.hp = 6 + hpBonus;
    this.armorClass = armorClass;
    this.attack = 30 + attBonus;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/54/5e/cb/545ecb06834f6fe5afd5faebcae19a5a.png";
  }
}
/*
class CharacterStats {
  constructor(strength, dexterity, intelligence, wisdom, charisma, constitution) {
    this.strength = strength;
    this.strBonus = this.bonusCalc(strength);
    this.dexterity = dexterity;
    this.dexBonus = this.bonusCalc(dexterity);
    this.intelligence = wisdom;
    this.intBonus = this.bonusCalc(intelligence);
    this.wisdom = wisdom;
    this.wisBonus = this.bonusCalc(wisdom);
    this.charisma = charisma;
    this.chaBonus = this.bonusCalc(charisma);
    this.constitution = constitution;
    this.conBonus = this.bonusCalc(constitution);
  }

    bonusCalc(stat) {
      let bonus = 0;
      if (stat > 17) {
        bonus = 4;
      } else if (stat > 15) {
        bonus = 3;
      } else if (stat > 13) {
        bonus = 2;
      } else if (stat > 11) {
        bonus = 1;
      } else if (stat > 9 ) {
        bonus = 0;
      } else {
        bonus = -1;
      }
  }
}
*/
export function getCharacter(name, charClass, statClass) {
  let character;
  let acBonus = statClass.dexBonus;
  let hpBonus = statClass.conBonus;
  let attBonus = statClass.strBonus;
  switch (charClass) {
  case "barbarian":
    character = new BarbarianCharacter(name, (10 + acBonus), hpBonus, attBonus,);
    break;
  case "bard":
    character = new BardCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "cleric":
    character = new ClericCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "druid":
    character = new DruidCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "fighter":
    character = new FighterCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "monk":
    character = new MonkCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "paladin":
    character = new PaladinCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "ranger":
    character = new RangerCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "rogue":
    character = new RogueCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "sorcerer":
    character = new SorcererCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "warlock":
    character = new WarlockCharacter(name, (10 + acBonus), hpBonus, attBonus);
    break;
  case "wizard":
    character = new WizardCharacter(name, (10 + acBonus), hpBonus, attBonus);
  }
  return character;
}

export let imageArray = ["https://i.pinimg.com/736x/ca/f3/26/caf3269770ab71cf0abd3e85f14aaf86.jpg", "https://i.pinimg.com/originals/b7/0e/d6/b70ed6eea7b09eea2d6612ddd099f188.png", 
"https://oldschoolroleplaying.com/wp-content/uploads/2019/05/Cleric-Two.jpg", "https://i2.wp.com/nerdarchy.com/wp-content/uploads/2015/11/PZO1121-ElfDruid.jpg?resize=774%2C1000&ssl=1", 
"https://vignette.wikia.nocookie.net/eladriells-dd/images/f/f4/Fighter.jpg/revision/latest?cb=20190324022153", "https://oldschoolroleplaying.com/wp-content/uploads/2019/03/monk-five.jpg", 
"https://oldschoolroleplaying.com/wp-content/uploads/2019/03/Paladin-Two-569x1024.png", "https://oldschoolroleplaying.com/wp-content/uploads/2019/04/ranger-two.jpg", 
"https://i.pinimg.com/originals/21/2d/71/212d710a1ce457d541cfaa5345534851.png", "https://i.pinimg.com/originals/b1/ce/a3/b1cea385f37b7c271c18da08b0bf574e.png", 
"https://wizardofthetavern.com/wp-content/uploads/2019/05/warlock.jpg", "https://i.pinimg.com/originals/54/5e/cb/545ecb06834f6fe5afd5faebcae19a5a.png"];

export let descriptionArray = [];