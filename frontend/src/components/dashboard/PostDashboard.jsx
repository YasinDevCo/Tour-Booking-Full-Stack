import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { BASE_URL } from "../../utils/config";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";

function PostDashboard() {
  const [addPost, setAddPost] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    price: "",
    maxGroupSize: "",
    desc: "",
    photo: "",
    featured: false,
  });

  const [posts, setPosts] = useState([]);
  const [editModal, setEditModal] = useState(false); // Modal برای ویرایش پست
  const [addModal, setAddModal] = useState(false); // Modal برای افزودن پست
  const [selectedPost, setSelectedPost] = useState(null); // پست انتخاب شده برای ویرایش

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tours`);
        const result = await response.json();

        if (response.ok) {
          setPosts(result.data);
        } else {
          console.error(result.message);
        }
      } catch (err) {
        console.error("Error fetching Posts:", err);
      }
    };

    fetchPosts();
  }, []);

  // برای حذف پست
  const handleDelete = async (postId) => {
    if (!window.confirm("آیا مطمئن هستید که می‌خواهید این پست را حذف کنید؟")) {
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/tours/${postId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (response.ok) {
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postId)
        );
        toast.success("پست با موفقیت حذف شد!");
      } else {
        toast.error("خطا در حذف پست: " + result.message);
      }
    } catch (error) {
      console.error("خطای شبکه در حذف پست:", error);
    }
  };

  // برای ویرایش پست
  const handleEdit = (post) => {
    setSelectedPost(post);
    setEditModal(true); // باز کردن مودال ویرایش
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setSelectedPost((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const updatePostHandler = async (e) => {
    e.preventDefault();
    if (!selectedPost) return;

    try {
      const res = await fetch(`${BASE_URL}/tours/${selectedPost._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedPost),
      });

      const result = await res.json();

      if (!res.ok) {
        return toast.warning(result.message);
      }

      toast.success("پست با موفقیت به‌روزرسانی شد!");
      setEditModal(false); // بستن مودال ویرایش بعد از موفقیت
      // بروزرسانی لیست پست‌ها
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === selectedPost._id ? selectedPost : post
        )
      );
    } catch (err) {
      toast.warning("خطا در به‌روزرسانی پست: " + err.message);
    }
  };

  // اضافه کردن پست جدید
  const addPostHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/tours`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(addPost),
      });

      const result = await res.json();

      if (!res.ok) {
        return toast.warning(result.message);
      }

      toast.success("پست با موفقیت اضافه شد!");
      setPosts((prev) => [...prev, result.data]);

      setAddPost({
        title: "",
        city: "",
        address: "",
        distance: "",
        price: "",
        maxGroupSize: "",
        desc: "",
        photo: "",
        featured: true,
      });
      setAddModal(false); // بستن مودال پس از موفقیت
    } catch (err) {
      toast.error("خطا در اضافه کردن پست: " + err.message);
    }
  };

  return (
    <div className="usersDashboard">
      {/* Button to open the Add Post Modal */}
      <Button color="primary" onClick={() => setAddModal(true)}>
       <FaPlus />   افزودن پست جدید
      </Button>

      {/* Modal for Adding a New Post */}
      <Modal isOpen={addModal} toggle={() => setAddModal(false)}>
        <ModalHeader
          toggle={() => setAddModal(false)}
          className="modal__header"
        >
          <span> افزودن پست جدید</span>{" "}
        </ModalHeader>
        <ModalBody>
          <Form className="modal__form" onSubmit={addPostHandler}>
            <input
              type="text"
              placeholder="عنوان"
              required
              id="title"
              onChange={(e) =>
                setAddPost({ ...addPost, title: e.target.value })
              }
              value={addPost.title}
            />
            <input
              type="text"
              placeholder="شهر"
              required
              id="city"
              onChange={(e) => setAddPost({ ...addPost, city: e.target.value })}
              value={addPost.city}
            />
            <input
              type="text"
              placeholder="آدرس"
              required
              id="address"
              onChange={(e) =>
                setAddPost({ ...addPost, address: e.target.value })
              }
              value={addPost.address}
            />
            <input
              type="number"
              placeholder="فاصله (km)"
              id="distance"
              onChange={(e) =>
                setAddPost({ ...addPost, distance: e.target.value })
              }
              value={addPost.distance}
            />
            <input
              type="number"
              placeholder="قیمت (تومان)"
              id="price"
              onChange={(e) =>
                setAddPost({ ...addPost, price: e.target.value })
              }
              value={addPost.price}
            />
            <input
              type="number"
              placeholder="حداکثر ظرفیت گروه"
              id="maxGroupSize"
              onChange={(e) =>
                setAddPost({ ...addPost, maxGroupSize: e.target.value })
              }
              value={addPost.maxGroupSize}
            />
            <textarea
              placeholder="توضیحات"
              id="desc"
              onChange={(e) => setAddPost({ ...addPost, desc: e.target.value })}
              value={addPost.desc}
            />
            <input
              type="text"
              placeholder="لینک تصویر"
              id="photo"
              onChange={(e) =>
                setAddPost({ ...addPost, photo: e.target.value })
              }
              value={addPost.photo}
            />
            <ModalFooter>
              <Button color="primary" type="submit">
                افزودن پست
              </Button>
              <Button color="secondary" onClick={() => setAddModal(false)}>
                بستن
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>

      <div className="list">
        <h3>لیست پست‌ها</h3>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post._id} className="post-item">
              <div className="post-info">
                <h4 className="post-title">{post.title}</h4>
                <p className="post-location">
                  {post.city} - {post.address}
                </p>
                <p className="post-price">قیمت: {post.price} تومان</p>
              </div>
              <div className="post-actions">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(post._id)}
                >
                  حذف
                </button>
                <button className="edit-btn" onClick={() => handleEdit(post)}>
                  ویرایش
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* مودال ویرایش پست */}
      <Modal isOpen={editModal} toggle={() => setEditModal(false)}>
        <ModalHeader
          toggle={() => setEditModal(false)}
          className="modal__header"
        >
          <span> ویرایش پست</span>{" "}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={updatePostHandler} className="modal__form">
            <input
              type="text"
              placeholder="عنوان"
              required
              id="title"
              value={selectedPost?.title || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="شهر"
              required
              id="city"
              value={selectedPost?.city || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="آدرس"
              required
              id="address"
              value={selectedPost?.address || ""}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="فاصله (km)"
              id="distance"
              value={selectedPost?.distance || ""}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="قیمت"
              id="price"
              value={selectedPost?.price || ""}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="حداکثر ظرفیت گروه"
              id="maxGroupSize"
              value={selectedPost?.maxGroupSize || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="لینک تصویر"
              id="photo"
              value={selectedPost?.photo || ""}
              onChange={handleChange}
            />
            <textarea
              placeholder="توضیحات"
              id="desc"
              value={selectedPost?.desc || ""}
              onChange={handleChange}
            />
            <ModalFooter>
              <Button color="primary" type="submit">
                به‌روزرسانی
              </Button>
              <Button color="secondary" onClick={() => setEditModal(false)}>
                بستن
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PostDashboard;
