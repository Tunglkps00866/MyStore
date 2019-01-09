let _data = [
    {
        id:"1",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/Latop-lenovo.png",
        type: ["laptop"],
        brand: ["MSI"],
    },
    {
        id:"2",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/Latop-lenovo.png",
        type: ["laptop"],
        brand: ["MSI"],
    },
    {
        id:"3",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["speaker"],
        brand: ["Logitech"],
    },
    {
        id:"4",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["new","speaker"],
        brand: ["Logitech"],
    },
    {
        id:"5",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/corsair/chuot-corsair.png",
        type: ["mouse"],
        brand: ["Corsair"],
    },
    {
        id:"6",
        name:"Chuot Corsair",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/corsair/chuot-corsair01.png",
        type: ["mouse"],
        brand: ["Corsair"],
    },
    {
        id:"7",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/corsair/tainghe-corsair.png",
        type: ["new","headphone"],
        brand: ["Corsair"],
    },
    {
        id:"8",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$9.99",
        img: "image/tainguyen/asus/tainghe-asus.png",
        type: ["headphone"],
        brand: ["Asus"],
    },
    {
        id:"9",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
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
    },
    getProductById(id){
        return _data.find(item=> item.id === id);
    }

}
