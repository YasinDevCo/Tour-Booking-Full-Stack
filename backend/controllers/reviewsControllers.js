import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    // پس از ایجاد نظر جدید، آرایه‌ی نظرات تور را به‌روزرسانی می‌کنیم
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: "نظر شما با موفقیت ثبت شد!",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "ثبت نظر با مشکل مواجه شد. لطفاً دوباره تلاش کنید.",
    });
  }
};
