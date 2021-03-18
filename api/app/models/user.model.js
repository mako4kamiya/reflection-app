module.exports = mongoose => {
    const User = mongoose.model(
        "User",
        mongoose.Schema(
        {
            name: String,
            email:String,
            password: String,
            roles: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Role"
                }
            ]},
        { timestamps: true }
        )
    );
    return User;
};