const target = process.argv.length > 2 ? process.argv[2] : console.log('Please specified target url')
const encoded = encodeURI(target)
console.log(encoded)

const encoded2 = encodeURIComponent(target)
console.log(encoded2)
