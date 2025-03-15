import User from "./../models/User.js";
import bcrypt from "bcryptjs";

// ایجاد کاربر جدید
export const createUser = async (req, res) => {
  const { password } = req.body;

  try {
    // اگر رمز عبور وجود داشته باشد، آن را هش می‌کنیم
    if (password) {
      const salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(password, salt);
    }

    // ایجاد کاربر جدید
    const newUser = new User(req.body);

    // ذخیره‌سازی کاربر جدید
    const saveUser = await newUser.save();

    // ارسال پاسخ موفقیت‌آمیز
    res.status(200).json({
      success: true,
      message: "کاربر با موفقیت ایجاد شد.",
      data: saveUser,
    });
  } catch (err) {
    // در صورت بروز خطا
    res.status(500).json({
      success: false,
      message: "ایجاد کاربر ناموفق بود. لطفاً دوباره تلاش کنید.",
    });
    console.log(err.message);
  }
};

// به‌روزرسانی اطلاعات کاربر
export const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    // اگر کاربر قصد تغییر رمز عبور را دارد، ابتدا آن را هش کنید.
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, salt);
    }

    // به‌روزرسانی اطلاعات کاربر در پایگاه داده
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "اطلاعات کاربر با موفقیت به‌روزرسانی شد.",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "به‌روزرسانی کاربر ناموفق بود. لطفاً دوباره تلاش کنید.",
    });
  }
};

// حذف کاربر
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "کاربر با موفقیت حذف شد.",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "حذف کاربر ناموفق بود. لطفاً دوباره تلاش کنید.",
    });
  }
};

// دریافت اطلاعات یک کاربر خاص
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "کاربر موردنظر یافت نشد.",
      });
    }

    res.status(200).json({
      success: true,
      message: "اطلاعات کاربر با موفقیت دریافت شد.",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "خطا در دریافت اطلاعات کاربر. لطفاً دوباره تلاش کنید.",
    });
  }
};

// دریافت لیست تمام کاربران
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "هیچ کاربری یافت نشد.",
      });
    }

    res.status(200).json({
      success: true,
      message: "لیست کاربران با موفقیت دریافت شد.",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "خطا در دریافت لیست کاربران. لطفاً دوباره تلاش کنید.",
    });
  }
};
