class ShoesController {
    constructor($state){
        this.state = $state;
        this.shoes = [
            {id: 4, name: "UnderArmour", price: 34.99, pic:"https://underarmour.scene7.com/is/image/Underarmour/1282000-001_DEFAULT?scl=1&fmt=jpg&qlt=70&wid=1064&hei=1240&size=958,1116&cache=on,off&bgc=f0f0f0&resMode=sharp2"},
            {id: 5, name: "Nike", price: 34.99, pic:"https://s-media-cache-ak0.pinimg.com/originals/2d/06/0f/2d060f91d2dfbdf88d0e06b563cf68cb.jpg"},
            {id: 6, name: "Adidas", price: 34.99, pic:"http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2f4adb27/zoom/C77124_01_standard.jpg?sw=2000&sfrm=jpg"}
        ];
    }
}