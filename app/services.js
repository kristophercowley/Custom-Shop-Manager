app.service('OrderService', function(){
    
})

app.service('ShirtService', function(){
     this.shirts = [
            {
                color: "Black",
                front: "assets/img/black-shirt.jpg",
                back: "assets/img/black-shirt-back.jpg"
            },
            {
                color: "Grey",
                front: "assets/img/grey-shirt.jpg",
                back: "assets/img/grey-shirt-back.jpg"
            },
            {
                color: "Brown",
                front: "assets/img/brown-shirt.jpg",
                back: "assets/img/brown-shirt-back.jpg"
            },
            {
                color: "Pink",
                front: "assets/img/pink-shirt.jpg",
                back: "assets/img/pink-shirt-back.jpg"
            }
        ];
        this.getShirts = function(){
            return this.shirts                                                                                                              
        }
})

app.service('Blank2Service', function(){
    
})