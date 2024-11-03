import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";    


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        fullname: {
            type: String,
            trim: true,
            lowercase: true,
            index: true,
        },
        avatar: {
            type: String, //cloudinary
            required: true,
        },
        coverimage: {
            type: String,
        },
        watchHistory: [
           { type: mongoose.Types.ObjectId,
            ref: "Video",
           }
        ],
        password: {
            type: String,
            required: [true, 'Password is reuired'],
        },
        refreshToken: {
            type: String,
        },

},
    {
        timestamps: true,
    }
);


userSchema.pre(
    "save", 
    async function(next) {
        if(!this.isModified("password")) return next();

        this.password = bcrypt.hash(this.password, 10)
        next();
        }
     );

userSchema.methods.isPasswordCorrect = async function(Password) {
   return await bcrypt.compare(Password, this.password);
}

export const User = mongoose.model("User", userSchema);