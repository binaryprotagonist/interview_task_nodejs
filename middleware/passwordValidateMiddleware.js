function validatePassword(req, res, next) {
  const password = req.body.password;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long with at least 1 lowercase alphabet, 1 uppercase alphabet, 1 number, and 1 special character.",
    });
  }

  next();
}

module.exports = { validatePassword };
