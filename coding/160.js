const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function test() {
  for(let i = 0; i < list.length; i++) {
    const res = await square(list[i])
    console.log(res)
  }
  // list.forEach(async x=> {
  //   const res = await square(x)
  //   console.log(res)
  // })
}
test() // 1, 4, 9