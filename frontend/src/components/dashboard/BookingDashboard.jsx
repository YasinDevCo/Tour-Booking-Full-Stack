import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/config";
import { FaTicketAlt, FaPhoneAlt, FaUsers } from "react-icons/fa";
import Loder from "../../shared/Loder";
import Error from "../../shared/Error";

function BookingDashboard({ user }) {
  const { _id } = user?.data;
  const role = user?.role;

  const [books, setBooks] = useState([]);

  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${BASE_URL}/booking/`);
        if (!res.ok) {
          throw new Error("Failed to fetch booking data");
        }

        const result = await res.json();
        setBooks(result.data);

        // فیلتر کردن داده‌ها برای کاربران معمولی
        const filteredBookings = result.data.filter(
          (booking) => booking.userId === _id
        );
        setBook(filteredBookings);

        setError(null);
      } catch (err) {
        setError(err.message);
        setBooks([]);
        setBook([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [_id]);

  if (loading) {
    return <Loder />;
  }

  if (error) {
    return <Error error={error} />;
  }

  // اگر role کاربر admin بود، تمام books را نمایش بده، در غیر این صورت فقط book که متعلق به کاربر است
  const dataToShow = role === "admin" ? books : book;

  return (
    <>
      <h3>لیست رزروها {role === "admin" ? "(همه رزروها)" : "(رزروهای شما)"}</h3>
      <div className="booking-container">
        {dataToShow.length === 0 ? (
          <p className="no-booking">هیچ رزروی یافت نشد.</p>
        ) : (
          <div className="booking-cards-container">
            {dataToShow.map((book) => (
              <div key={book._id} className="booking-card">
                <div className="booking-card-header">
                  <FaTicketAlt size={50} className="ticket-icon" />
                  <span className="tour-name">{book.tourName}</span>
                </div>
                <div className="booking-card-body">
                  <p>
                    <strong>
                      <FaUsers size={15} className="detail-icon" /> نام مسافر:
                    </strong>{" "}
                    {book.fullName}
                  </p>
                  <p>
                    <strong>
                      <FaUsers size={15} className="detail-icon" /> تعداد مهمان:
                    </strong>{" "}
                    {book.guestSize}
                  </p>
                  <p>
                    <strong>
                      <FaPhoneAlt size={15} className="detail-icon" /> شماره
                      تماس:
                    </strong>{" "}
                    {book.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default BookingDashboard;
