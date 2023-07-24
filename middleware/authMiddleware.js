const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret_key');
    req.user = { userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = {
  authenticate,
};
