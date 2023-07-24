const User = require('../models/user');

const remove = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Delete the user
    await User.findByIdAndDelete(userId);

    res.json({ message: 'User removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const updateEmail = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { email } = req.body;

    // Update the user's email
    await User.findByIdAndUpdate(userId, { email });

    res.json({ message: 'Email updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const updatePassword = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { password } = req.body;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const updateName = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name } = req.body;

    // Update the user's name
    await User.findByIdAndUpdate(userId, { name });

    res.json({ message: 'Name updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  remove,
  updateEmail,
  updatePassword,
  updateName,
};
