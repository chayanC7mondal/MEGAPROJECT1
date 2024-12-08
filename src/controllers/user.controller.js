import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  respone.status(200).json({
    message: "ok",
  });
});

export { registerUser };
