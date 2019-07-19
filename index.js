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
    display(){
        console.log(`Hero ${this.name},${this.ability}, ${this.stat}`);
        
    }
}

const Sven  =  new Hero("Sven","stun", {str:24,agi:20,int:14});
const Qop  =  new Hero("Qop","blink", {str:15,agi:15,int:22});
Sven.display();
Qop.display();