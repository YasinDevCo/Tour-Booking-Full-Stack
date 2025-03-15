import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const register = async (req, res) => {
  try {
    // اعتبارسنجی ورودی‌ها
    const { username, email, password, photo, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "لطفاً تمام فیلدها را پر کنید.",
      });
    }

    // بررسی اینکه آیا ایمیل یا نام کاربری تکراری است یا نه
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "ایمیل یا نام کاربری قبلاً استفاده شده است.",
      });
    }

    // هش کردن پسورد
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // ایجاد کاربر جدید
    const newUser = new User({
      username,
      email,
      password: hash,
      photo,
      role: role || "user", // اگر نقشی برای کاربر تعیین نشده، به‌صورت پیش‌فرض 'user' قرار داده می‌شود
    });

    // ذخیره کردن کاربر جدید در دیتابیس
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "حساب کاربری با موفقیت ایجاد شد.",
    });
    console.log(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "ایجاد حساب کاربری ناموفق بود. لطفاً دوباره تلاش کنید."+err,
    });
  }
};

export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    // بررسی اینکه آیا کاربر وجود دارد یا نه
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "کاربری با این ایمیل یافت نشد." });
    }

    // بررسی درستی رمز عبور
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // در صورت نادرست بودن رمز عبور
    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "ایمیل یا رمز عبور اشتباه است.",
      });
    }

    const { password, role, ...rest } = user._doc;
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // ذخیره توکن در کوکی مرورگر و ارسال پاسخ به کاربر
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "ورود با موفقیت انجام شد.",
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "ورود ناموفق بود. لطفاً دوباره تلاش کنید.",
    });
  }
};
