export class producto{
    name='';
    description='';
    stock=true;
    price=0;
    imagen= 'default';

    constructor(name,description,completed,level){
        this.name= name;
        this.description= description;
        this.stock= stock;
        this.price= price;
        this.imagen=imagen;
    }
}