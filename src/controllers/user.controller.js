import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validation- not empty
  //check f user already exists: email,username
  //check for images, check for avatar
  //upload them to cloudinary, avatar
  // create user object- create entry in db
  //remove password and refresh token feild from response
  //check for user creation
  //return response

  const { fullName, email, sername, password } = req.body;
  console.log("email:", email);
});

export { registerUser };
