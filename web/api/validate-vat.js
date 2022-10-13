const validate = require('validate-vat')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { body } = req

  await validate(
    body.vat.substring(0, 2),
    body.vat.substring(2),
    function (err, data) {
      if (data) {
        res.status(200).send(data)
      } else {
        res.status(500).send(err)
      }
    }
  )
}
