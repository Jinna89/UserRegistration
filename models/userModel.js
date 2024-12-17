import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        NIDNumber: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true },
        password: { type: String, required: true },
        bloodGroup: { type: String, required: true },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
