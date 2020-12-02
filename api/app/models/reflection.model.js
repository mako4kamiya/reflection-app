module.exports = mongoose => {
    const Reflection = mongoose.model(
        "reflection",
        mongoose.Schema(
        {
            first_condition: String,
            realization: String,
            action: String,
            last_condition: String,
            user_id:String
        },
        { timestamps: true }
        )
    );

    return Reflection;
};