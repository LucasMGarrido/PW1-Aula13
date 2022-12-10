const User = require('../models/User');

const store = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = { name, email, password };

    const UserId = await User.createAutoInc(newUser);

    const user = await User.readById(UserId);

  } catch (err) {
    console.error(err);
  }
};

module.exports = { store };

