let a = '湖'
let b = {
    a: '南',
    p: {
        a: '省',
        b: function(){
        return this.a
        }
    }
}
console.log(b.p.b())
var test = b.p.b
console.log(test())
