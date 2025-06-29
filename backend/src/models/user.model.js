import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema(
{
    email: {
        type: String,
        reuired: true,
        unique: true,
    },
    fullName: {
        type: String,
        reuired: true,
    },
    password: {
        type: String,
        reuired: true,
        minLength: 6,
    },
    profilePic: {
        type: String,
        default: "",
    },
},
{
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);

export default User;