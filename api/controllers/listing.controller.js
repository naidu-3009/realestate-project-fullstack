import listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
  try {
    const newlisting = await listing.create(req.body);
    return res.status(201).json(newlisting);
  } catch (error) {
    next(error);
  }
};
