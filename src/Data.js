let _data = [
    {
        id:"1",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/Latop-lenovo.png",
        type: ["new","laptop"],
        brand: ["MSI"],
    },
    {
        id:"2",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/Latop-lenovo.png",
        type: ["laptop"],
        brand: ["MSI"],
    },
    {
        id:"3",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["speaker"],
        brand: ["Logitech"],
    },
    {
        id:"4",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["new","speaker"],
        brand: ["Logitech"],
    },
    {
        id:"5",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/corsair/chuot-corsair.png",
        type: ["mouse"],
        brand: ["Corsair"],
    },
    {
        id:"6",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/corsair/chuot-corsair01.png",
        type: ["mouse"],
        brand: ["Corsair"],
    },
    {
        id:"7",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/corsair/tainghe-corsair.png",
        type: ["new","headphone"],
        brand: ["Corsair"],
    },
    {
        id:"8",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/asus/tainghe-asus.png",
        type: ["headphone"],
        brand: ["Asus"],
    },
    {
        id:"9",
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/logitech/tainghe-logi.png",
        type: ["headphone"],
        brand: ["Logitech"],
    },
];
module.exports = {
    getProducList: (type) => {
        if(!type) {
            return _data;
        }
        let result = [];
        for(let i in _data) {

            if(_data[i].type && _data[i].type.indexOf(type) != -1) {
                result.push(_data[i]);
            }

        }
        console.log(result)
        return result;
    },
    getProducListByBrand: (type, brand) => {
        if(!type) {
            return _data;
        }
        let result = [];
        for(let i in _data) {

            if(_data[i].brand.indexOf(brand) != -1 && _data[i].type && _data[i].type.indexOf(type) != -1) {
                result.push(_data[i]);
            }

        }
        console.log(result)
        return result;
    }
}
