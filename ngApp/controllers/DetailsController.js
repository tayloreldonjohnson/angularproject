class DetailsController{
    constructor($stateParams){
        var details = [
            {id: 1, 
            name: "Nike", 
            price: 34.99, 
            info: "Aliquam vehicula convallis pharetra. Vestibulum ipsum est, ullamcorper ut nunc mattis, ornare euismod leo. Nulla tempor libero risus, ac rhoncus magna consectetur eu. Praesent sed lacus velit. Integer vitae lobortis diam. Phasellus lacinia est eu nisl interdum volutpat. Nullam eleifend et sem a ultrices.", pic:"https://images-na.ssl-images-amazon.com/images/I/81eClCfZ0BL._UL1500_.jpg"},
            {id: 2, 
            name: "UnderArmour", 
            price: 12.99, 
            info: "Aliquam vehicula convallis pharetra. Vestibulum ipsum est, ullamcorper ut nunc mattis, ornare euismod leo. Nulla tempor libero risus, ac rhoncus magna consectetur eu. Praesent sed lacus velit. Integer vitae lobortis diam. Phasellus lacinia est eu nisl interdum volutpat. Nullam eleifend et sem a ultrices.",  pic:"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/8199118_fpx.tif?bgc=255,255,255&wid=224&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
            {id: 3, 
            name: "Adidas", 
            price: 11.99, 
            info: "Aliquam vehicula convallis pharetra. Vestibulum ipsum est, ullamcorper ut nunc mattis, ornare euismod leo. Nulla tempor libero risus, ac rhoncus magna consectetur eu. Praesent sed lacus velit. Integer vitae lobortis diam. Phasellus lacinia est eu nisl interdum volutpat. Nullam eleifend et sem a ultrices.",  pic:"http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/Of0AAOSwDk5UK8rl/$_35.JPG?set_id=2"},
            {id: 4,
            name: "UnderArmour", 
            price: 34.99,
            info: "Aliquam vehicula convallis pharetra. Vestibulum ipsum est, ullamcorper ut nunc mattis, ornare euismod leo. Nulla tempor libero risus, ac rhoncus magna consectetur eu. Praesent sed lacus velit. Integer vitae lobortis diam. Phasellus lacinia est eu nisl interdum volutpat. Nullam eleifend et sem a ultrices.",  
            pic:"https://underarmour.scene7.com/is/image/Underarmour/1282000-001_DEFAULT?scl=1&fmt=jpg&qlt=70&wid=1064&hei=1240&size=958,1116&cache=on,off&bgc=f0f0f0&resMode=sharp2"},
            {id: 5, 
            name: "Nike", 
            price: 34.99,
            Info: "Aliquam vehicula convallis pharetra. Vestibulum ipsum est, ullamcorper ut nunc mattis, ornare euismod leo. Nulla tempor libero risus, ac rhoncus magna consectetur eu. Praesent sed lacus velit. Integer vitae lobortis diam. Phasellus lacinia est eu nisl interdum volutpat. Nullam eleifend et sem a ultrices.", 
            pic:"https://s-media-cache-ak0.pinimg.com/originals/2d/06/0f/2d060f91d2dfbdf88d0e06b563cf68cb.jpg"},
            {id: 6,
            name: "Adidas", 
            price: 34.99, pic:"http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2f4adb27/zoom/C77124_01_standard.jpg?sw=2000&sfrm=jpg"}
        ];

        var id = $stateParams["id"];

        this.detail = details.filter(d => d.id == id)[0];
        }
}