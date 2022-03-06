getPayPal = async (req, res) => res.send(process.env.PAYPAL_CLIENT_ID);

module.exports = {
  getPayPal,
};
