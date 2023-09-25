class Ps{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        alert("My name is "+this.name+" and I am "+this.age+" years old.");
    }
    add_age(x){
        this.age += x;
    }
}

export{
    Ps,
}
