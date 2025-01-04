import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one-who-subscribes
      ref: "User",
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId, //one-to-whom-subscribed
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const subscription = mongoose.model("Subscription", subscriptionSchema);
