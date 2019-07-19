class Hero {
    constructor(name, ability, stat){
        this.name = name;
        this.ability = ability;
        this.stat = {};
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
    setStat(status){
        this.str = status.str;
        this.age = status.agi;
        this.int = status.int;
    }
    lookStat(){
        console.log(`Stat ${this.str},${this.age}, ${this.int}`);
    }
}

class  DK  extends Hero {
    constructor(){
        super();
        this.uniform = "Dragon"
    }
}


const Sven  =  new Hero("Sven","stun", {str:24,agi:20,int:14});
const Qop  =  new Hero("Qop","blink", {str:15,agi:15,int:22});
Sven.display();
Qop.display();
Sven.setStat({str:99,agi:99,int:99});
Sven.lookStat();

// @todo 1:28min  ลองทดสอบ pdd