import Mailchimp from 'mailchimp-api-v3'

const apiKey = process.env.MAILCHIMP_API_KEY
const audienceId = 'a6f3385b20'
const mailchimp = new Mailchimp(apiKey)

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { body } = req
  try {
    const response = await mailchimp.request({
      method: 'post',
      path: `/lists/${audienceId}/members`,
      body: {
        email_address: body.email,
        status: 'subscribed',
      },
    })
    const { _links, ...result } = response
    console.log(response)
    res.status(result.statusCode).json(result)
  } catch (err) {
    console.log(err.status, err.detail, err.errors)
    // res.status(err.status).send(err.detail)
    res.status(200).send(err.detail)
  }
}
