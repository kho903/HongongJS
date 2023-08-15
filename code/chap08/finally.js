
function test1() {
    console.log('============ test1 ============')
    try {
        console.log('A 위치입니다.')
        throw '예외 강제 발생'
    } catch (exception) {
        console.log('B 위치입니다.')
        return
    }
    console.log('C 위치입니다.')
}

test1()

function test2() {
    console.log('============ test2 ============')
    try {
        console.log('A 위치입니다.')
        throw '예외 강제 발생'
    } catch (exception) {
        console.log('B 위치입니다.')
        return
    } finally {
        console.log('C 위치입니다.')
    }
}

test2()