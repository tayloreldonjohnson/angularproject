class ShirtsController {
    constructor($state){
        this.state = $state;
        this.shirts = [
            {id: 1, name: "Nike", price: 34.99, pic:"https://images-na.ssl-images-amazon.com/images/I/81eClCfZ0BL._UL1500_.jpg"},
            {id: 2, name: "UnderArmour", price: 12.99, pic:"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/8199118_fpx.tif?bgc=255,255,255&wid=224&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
            {id: 3, name: "Adidas", price: 11.99, pic:"http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/Of0AAOSwDk5UK8rl/$_35.JPG?set_id=2"}
        ];
    }
}