class Hero {
    constructor(name, ability, stat){
        this.name = name;
        this.ability = ability;
        this.stat = stat;
    }
     getName(){
        return  this.name;
    }
    getAbility(){
        return  this.ability
    }
    getStat(){
        return  this.stat;
    }
}

const Sven  =  new Hero("Sven","stun", {str:24,agi:20,int:14});