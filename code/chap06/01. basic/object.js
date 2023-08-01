console.log(typeof [])

const product = {
    제품명 : '7D 건조 망고',
    유형 : '당절임',
    성분 : '망고, 설탕, 치자황색소',
    원산지 : '필리핀'
}

console.log(product['제품명'])
console.log(product['유형'])
console.log(product['성분'])
console.log(product['원산지'])
console.log('===============')
console.log(product.제품명)
console.log(product.유형)
console.log(product.성분)
console.log(product.원산지)

const object = {
    number : 273,
    string : '구름',
    boolean : true,
    array : [52, 273, 103, 32],

    method: function () {}
}

const pet = {
    name : '구름',
    eat: function (food) {
        console.log(`${this.name}은/는 ${food}을/를 먹습니다.`)
    },
}

pet.eat('밥')