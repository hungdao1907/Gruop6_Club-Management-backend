const express = require('express');
const router = express.Router();

const {
  createClub,
  getClubs,
  joinClub,
  leaveClub,
  deleteClub
} = require('../controllers/clubController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

// ---- ROUTES ----

// Lấy danh sách câu lạc bộ
router.get('/', protect, getClubs);

// Tạo club (admin)
router.post('/', protect, adminOnly, createClub);

// Tham gia club
router.post('/:id/join', protect, joinClub);

// Rời club
router.post('/:id/leave', protect, leaveClub);

// Xóa club (admin)
router.delete('/:id', protect, adminOnly, deleteClub);

module.exports = router;
