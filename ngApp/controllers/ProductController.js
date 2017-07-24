class ProductController {
    constructor($state){
        this.state = $state;
        this.products = [
            {id: 1, name: "shoes", price: 34.99},
            {id: 2, name: "hat", price: 12.99},
            {id: 3, name: "shirt", price: 11.99},
            {id: 4, name: "pants", price: 22.99},
            {id: 5, name: "underwear", price: 1.99},
            {id: 6, name: "socks", price: 2.99},
        ];
    }
}