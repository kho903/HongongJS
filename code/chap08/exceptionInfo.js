
try {
    const array = new Array(9999999999999999)
} catch (exception) {
    console.log(exception)
    console.log()
    console.log(`예외 이름 : ${exception.name}`)
    console.log(`예외 메시지 : ${exception.message}`)
}