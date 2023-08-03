let input = `
일자,달러,엔,유로
02,1141.8,1097.46,1262.37
03,1148.7,1111.36,1274.65
04,1140.6,1107.81,1266.58
07,1143.4,1099.58,1267.8
08,1141.6,1091.97,1261.07
`
input = input.trim()
input = input.split('\n')
input = input.map((line) => line.split(','))
console.log(JSON.stringify(input, null, 2))
