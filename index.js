

function calculateItemTotal(item) {
  const subTotal = item.price * item.quantity * (1 - item.discount)

  item.total = parseInt(subTotal * 100) / 100

  return item
}

const calculateTotal = (item) => {
  return item.map(calculateItemTotal)
}

module.exports = calculateTotal



