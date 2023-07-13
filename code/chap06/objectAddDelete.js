const student = {}
student.이름 = '김지훈'
student.취미 = '수영'
student.장래희망 = '개발자'

console.log(JSON.stringify(student))

delete student.장래희망
console.log(JSON.stringify(student))
