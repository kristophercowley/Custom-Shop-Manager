app.service('OrderService', function(){
    
})

app.service('ShirtService', function(){
     this.shirts = [
            {
                color: "Black",
                front: "img/black-shirt.jpg",
                back: "img/black-shirt-back.jpg"
            },
            {
                color: "Grey",
                front: "img/grey-shirt.jpg",
                back: "img/grey-shirt-back.jpg"
            },
            {
                color: "Brown",
                front: "img/brown-shirt.jpg",
                back: "img/brown-shirt-back.jpg"
            },
            {
                color: "Pink",
                front: "img/pink-shirt.jpg",
                back: "img/pink-shirt-back.jpg"
            }
        ];
        this.getShirts = function(){
            return this.shirts
        }
})

app.service('Blank2Service', function(){
    
})