export function getLoot(monsterCR, player) {
  let random = Math.floor(Math.random *10);
  if (monsterCR < 1 && random > 6) {
    player.inventory[0].healthPotion += 1;
  } else if (monsterCR >= 1 && monsterCR < 6 && random > 6 ) {
    player.inventory[0].healthPotion += 1;
  } else if (monsterCr >= 6 && monsterCR < 11 && random > 6) {
    player.inventory[0].healthPotion += 1;
  } else if (monsterCr >= 11 && monsterCR < 16 && random > 6) {
    player.inventory[0].healthPotion += 1;
  } else if (monsterCr >= 16 && monsterCR < 21 && random > 6)  {
    player.inventory[0].healthPotion += 1;
  } else if (monsterCR >= 21 && monsterCR < 26 && random > 6) {
    player.inventory[0].healthPotion += 1;
  } else if (monsterCR >= 26 && monsterCR < 31 && random > 6) {
    player.inventory[0].healthPotion += 1;
  }
}