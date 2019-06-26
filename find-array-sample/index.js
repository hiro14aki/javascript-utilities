const getScale = (staff) => {
  return define.find(el => {
    return staff <= el.staff
  })
}

const define = [
  {'staff': 100, 'value': [5, 10, 15]},
  {'staff': 200, 'value': [5, 10, 15, 20]},
  {'staff': 300, 'value': [5, 10, 15, 20, 25]},
  {'staff': 400, 'value': [5, 10, 15, 20, 25, 30]},
  {'staff': 500, 'value': [5, 10, 15, 20, 25, 30, 35]},
  {'staff': 600, 'value': [5, 10, 15, 20, 25, 30, 35, 40]}
]

const res = getScale(365)

res.value.map(e => {
  console.log(e)
})
