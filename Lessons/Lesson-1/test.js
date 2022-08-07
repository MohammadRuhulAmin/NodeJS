const name = 'mario'
console.log(name)
console.log(global)
global.setTimeout(() => {
    console.log('This is Global Function!')
}, 3000)

const interval = setInterval(()=>{
    console.log('welcome Ruhul Amin')
},1000)
