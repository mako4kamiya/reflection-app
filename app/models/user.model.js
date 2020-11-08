module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
        {
            name: String,
            password: String,
            vocation: String,
            meaning: String
        },
        { timestamps: true }
        )
    );

    return User;
};