import Tour from "./../models/Tour.js";

// ایجاد یک تور جدید
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const saveTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "تور با موفقیت ایجاد شد.",
      data: saveTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "ایجاد تور ناموفق بود. لطفاً دوباره تلاش کنید.",
    });
  }
};

// به‌روزرسانی اطلاعات یک تور
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "اطلاعات تور با موفقیت به‌روزرسانی شد.",
      data: updateTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "به‌روزرسانی تور ناموفق بود. لطفاً دوباره تلاش کنید.",
    });
  }
};

// حذف یک تور
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "تور با موفقیت حذف شد.",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "حذف تور ناموفق بود. لطفاً دوباره تلاش کنید.",
    });
  }
};

// دریافت اطلاعات یک تور خاص
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "تور موردنظر یافت نشد.",
      });
    }

    res.status(200).json({
      success: true,
      message: "اطلاعات تور با موفقیت دریافت شد.",
      data: tour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "خطا در دریافت اطلاعات تور. لطفاً دوباره تلاش کنید.",
    });
  }
};

// دریافت لیست تمام تورها (با قابلیت صفحه‌بندی)
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page) || 0; // مقدار پیش‌فرض 0 برای صفحه اول

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "لیست تورها با موفقیت دریافت شد.",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "خطا در دریافت لیست تورها. لطفاً دوباره تلاش کنید.",
    });
  }
};

// جستجوی تور بر اساس شهر، فاصله و ظرفیت گروه
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance) || 0;
  const maxGroupSize = parseInt(req.query.maxGroupSize) || 0;

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "نتایج جستجو با موفقیت دریافت شد.",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "خطا در جستجوی تورها. لطفاً دوباره تلاش کنید.",
    });
  }
};

// دریافت تورهای ویژه
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).limit(8).populate("reviews");

    res.status(200).json({
      success: true,
      message: "تورهای ویژه با موفقیت دریافت شد.",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "خطا در دریافت تورهای ویژه. لطفاً دوباره تلاش کنید.",
    });
  }
};

// دریافت تعداد کل تورها
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "خطا در دریافت تعداد تورها. لطفاً دوباره تلاش کنید.",
    });
  }
};
