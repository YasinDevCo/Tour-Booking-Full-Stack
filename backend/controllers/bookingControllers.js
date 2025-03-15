import Booking from "../models/Booking.js";

// ایجاد رزرو جدید
export const createBooking = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "اطلاعات رزرو نامعتبر است!",
      });
    }

    const newBooking = new Booking(req.body);
    const saveBooking = await newBooking.save();

    res.status(201).json({
      success: true,
      message: "تور شما با موفقیت رزرو شد!",
      data: saveBooking,
    });
  } catch (err) {
    console.error("خطا در ایجاد رزرو:", err.message);
    res.status(500).json({
      success: false,
      message: "خطای داخلی سرور. لطفاً دوباره تلاش کنید.",
      error: err.message, // برای مشاهده جزئیات بیشتر در زمان دیباگ
    });
  }
};

// دریافت یک رزرو بر اساس ID
export const getBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "رزرو موردنظر یافت نشد!",
      });
    }

    res.status(200).json({
      success: true,
      message: "اطلاعات رزرو با موفقیت دریافت شد!",
      data: booking,
    });
  } catch (err) {
    console.error("خطا در دریافت رزرو:", err.message);
    res.status(500).json({
      success: false,
      message: "خطای داخلی سرور. لطفاً دوباره تلاش کنید.",
      error: err.message,
    });
  }
};

// دریافت تمام رزروها
export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "هیچ رزروی یافت نشد!",
      });
    }

    res.status(200).json({
      success: true,
      message: "لیست رزروها با موفقیت دریافت شد!",
      data: bookings,
    });
  } catch (err) {
    console.error("خطا در دریافت لیست رزروها:", err.message);
    res.status(500).json({
      success: false,
      message: "خطای داخلی سرور. لطفاً دوباره تلاش کنید.",
      error: err.message,
    });
  }
};
