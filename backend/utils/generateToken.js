import jwt from "jsonwebtoken";

const JWT_SECRET = "6yXjiOpDQgaBQONCGDP2Q5zypkjeQJS1o4pyV8rFbic=";
const NODE_ENV ="development";

const generateTokenAndSetCookie = (userId, res) => {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in the environment variables');
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true,
    sameSite: "strict",
    secure: NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
