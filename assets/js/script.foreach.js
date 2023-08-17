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
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService{
    constructor(){ //nao chama nenhum parametro
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name){
        const id = this.nextCategoryId ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

const categoryList = new CategoryService();

function createCategory(){
    const categoryName = "doce";

    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);
}