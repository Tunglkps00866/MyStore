let _data = [
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png",
        type: ["new","laptop"],
        brand: ["MSI"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png",
        type: ["laptop"],
        brand: ["MSI"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["speaker"],
        brand: ["Logitech"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["new","speaker"],
        brand: ["Logitech"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/tainguyen/corsair/chuot-corsair.png",
        type: ["mouse"],
        brand: ["Corsair"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/tainguyen/corsair/chuot-corsair01.png",
        type: ["mouse"],
        brand: ["Corsair"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/tainguyen/corsair/tainghe-corsair.png",
        type: ["new","headphone"],
        brand: ["Corsair"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/tainguyen/asus/tainghe-asus.png",
        type: ["headphone"],
        brand: ["Asus"],
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/tainguyen/logitech/tainghe-logi.png",
        type: ["headphone"],
        brand: ["Logitech"],
    },
];
module.exports = {
    getProducList: (type, brand) => {
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
