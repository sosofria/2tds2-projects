class Category{ //possui varios produtos
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.projects = []; //array
    }
}

//produto pertence a uma categoria
class Product{
    constructor(id, name, price, category){
        this.id = id;
        this.name = id;
        this.price = price;
        this.category = category;
    }
}