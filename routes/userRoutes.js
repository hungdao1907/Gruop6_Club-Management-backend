const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require('../controllers/userController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const User = require('../models/User');

/* ---------------------- AUTH ---------------------- */
// Đăng ký
router.post('/register', registerUser);

// Đăng nhập
router.post('/login', loginUser);

/* ------------------- USER PROFILE ------------------- */

// Lấy thông tin cá nhân
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');

    res.json({
      message: 'Thông tin người dùng',
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
});

// Cập nhật thông tin cá nhân
router.put('/me', protect, async (req, res) => {
  try {
    const allowedFields = ['name', 'email', 'phone']; // tránh update password ở đây

    const updates = {};
    Object.keys(req.body).forEach((key) => {
      if (allowedFields.includes(key)) updates[key] = req.body[key];
    });

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
    }).select('-password');

    res.json({
      message: 'Cập nhật thành công',
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
});

/* ---------------------- ADMIN ---------------------- */

// Lấy danh sách tất cả user (admin)
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select('-password');

    res.json({
      message: 'Danh sách người dùng',
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
});

// Xóa user theo ID (admin)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user)
      return res.status(404).json({ message: 'Không tìm thấy user' });

    await user.deleteOne();

    res.json({ message: 'Đã xóa user thành công' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
});

module.exports = router;
