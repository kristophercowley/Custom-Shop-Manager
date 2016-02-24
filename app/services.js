app.service('OrderService', function () {

})

app.service('ShirtService', function () {
    this.orders = [
        {
            userName: "Bobba Fet",
            orderNum: 8675309,
            userEmail: "bobba@fet.com",
            color: "Black",
            front: "assets/img/black-shirt.jpg",
            frontImage: "bcw",
            back: "assets/img/black-shirt-back.jpg",
            backImage: "tea",
            orderDate: "12/04/1978",
            fullfilled: false
        },
        {
            userName: "Lord Vader",
            orderNum: 666,
            userEmail: "thedarklord@yahoo.com",
            color: "Grey",
            front: "assets/img/grey-shirt.jpg",
            back: "assets/img/grey-shirt-back.jpg",
            orderDate: "11/11/1111",
            fullfilled: false
        },
        {
            userName: "Dr. Mario",
            orderNum: 101010,
            userEmail: "mariodaking@gmail.com",
            color: "Brown",
            front: "assets/img/brown-shirt.jpg",
            back: "assets/img/brown-shirt-back.jpg",
            orderDate: "12/31/1999",
            fullfilled: false
        },
        {
            userName: "sub Zero",
            orderNum: 999999999,
            userEmail: "sub@zero.com",
            color: "Pink",
            front: "assets/img/pink-shirt.jpg",
            back: "assets/img/pink-shirt-back.jpg",
            orderDate: "01/01/2000",
            fullfilled: false
        }
    ];
    this.getOrders = function () {
        return this.orders
    }
})

app.service('Blank2Service', function () {

})