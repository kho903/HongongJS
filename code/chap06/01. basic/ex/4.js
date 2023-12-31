const object = {
    ko: '빵',
    en: 'bread',
    ja: 'パン',
    fr: 'pain',
    es: 'pan',
    lang: {
        ko: '한국어',
        en: '일본어',
        ja: '일본어',
        fr: '프랑스어',
        es: '스페인어'
    },
    print: function (lang) {
        console.log(`${this.ko}는 ${this.lang[lang]}으로 ${this[lang]}입니다.`)
    },
}
object.print('es')
object.print('ja')