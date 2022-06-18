import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
    {
        orden: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        score: {
            type: Number,
            trim: true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const reviewCreated = mongoose.model("Review", reviewSchema);
export default reviewCreated;
