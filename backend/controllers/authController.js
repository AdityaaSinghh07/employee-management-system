const bcrypt = require("bcryptjs");
const { User } = require("../models");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hash,
  });

  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
  });

  if (!user)
    return res.status(404).json({
      message: "User not found",
    });

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid)
    return res.status(401).json({
      message: "Invalid Credentials",
    });

  res.json({
    token: generateToken(user.id),
  });
};
