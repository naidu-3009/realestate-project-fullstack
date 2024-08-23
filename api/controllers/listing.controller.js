import listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const newlisting = await listing.create(req.body);
    return res.status(201).json(newlisting);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const Listing = await listing.findById(req.params.id);

  if (!Listing) {
    return next(errorHandler(404, "Listing not found"));
  }
  if (req.user.id !== Listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings"));
  }

  try {
    await listing.findByIdAndDelete(req.params.id); // Corrected method name
    res.status(200).json("Listing has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const Listing = await listing.findById(req.params.id);

  if (!Listing) {
    return next(errorHandler(404, "Listing not found"));
  }

  if (req.user.id !== Listing.userRef) {
    return next(errorHandler(401, "You can only update your own listings"));
  }

  try {
    const updatedListing = await listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};
