
function test(object) {
    console.log(object.a + object.b)
}

test({})


function test2(object) {
    if (object.a !== undefined && object.b !== undefined) {
        console.log(object.a + object.b)
    } else {
        throw new Error('a 속성과 b 속성을 지정하지 않았습니다.')
    }
}

test2({})
