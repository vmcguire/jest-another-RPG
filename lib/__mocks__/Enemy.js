const Potion = require("../lib/Potion");

function Enemy(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);
  this.inventory = [new Potion("health"), new Potion()];
}

Enemy.prototype.getHealth = function () {
  return `The ${this.name}'s health is now ${this.health}!`;
};

Enemy.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Enemy.prototype.reduceHealth = function (health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

Enemy.prototype.getAttackValue = function () {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = Enemy;
