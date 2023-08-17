class Category{ //possui varios produtos
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = []; //array
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

class ProductService{
    constructor(){
        this.products = [];
        this.nextCategoryId = 0;
    }

    addProduct(name, price, category){
        const id = this.nextCategoryId++;
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService();
const productList = new ProductService();

function createCategory(){
    const categoryName = "doce";

    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);
}

function createProduct(){
    const productName = "bolo";
    const productPrice = 20;
    const productCategory = categoryList.categories[0];
    
    productList.addProduct(productName, productPrice, productCategory);

    console.log(productList.products);
}
