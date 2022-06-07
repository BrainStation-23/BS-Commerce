export const modelOptionsFactory = () => {
  return {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (_, ret) => {
        delete ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
      },
    },
  };
};
