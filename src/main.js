const myPromisse = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      // resolve('ok')
      reject('deu ruim')
    }, 2000)
  })

//es2017 / es8 / async/await

// myPromisse()
//   .then(response => {
//     console.log('Primeira vez')
//     myPromisse().then(response => {
//       console.log('Segunda vez')
//       myPromisse().then(response => {
//         console.log('terceira vez')
//       })
//     })
//   })
//   .catch(error => {
//     console.warn(error)
//   })

const exec = async () => {
  try {
    loading = true
    await myPromisse()
    console.log('Primeira vez')

    await myPromisse()
    console.log('Segunda vez')

    await myPromisse()
    console.log('Terceira vez')
  } catch (error) {
    console.warn(error)
  } finally {
    loading = false
  }
}

exec()
