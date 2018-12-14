let _data = [
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png",
        type: ["new", "laptop"]
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png"
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png"
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png"
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png"
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png"
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png"
    },
    {
        product_name:"Lenovo Legion Y520",
        product_descript: "15.6 Essential Gaming Laptop.",
        img: "image/Latop-lenovo.png"
    },
];
module.exports = {
    getProducList: (type) => {
        let result = [];
        for(let i in _data) {
            if(_data[i].type && _data[i].type.indexOf(type) != -1) {
                result.push(_data[i]);
            } else {
                result.push(_data[i])
            }
        }
        return result;
    }
}