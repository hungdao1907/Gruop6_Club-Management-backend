const Club = require('/models/Club');

// Tạo câu lạc bộ (Admin Only)
exports.createClub = async (req, res) => {
  try {
    const { name, description } = req.body;

    const club = await Club.create({
      name,
      description,
      createdBy: req.user.id
    });

    res.status(201).json({
      message: "Tạo câu lạc bộ thành công",
      data: club
    });

  } catch (err) {
    res.status(400).json({ message: "Tạo thất bại", error: err.message });
  }
};

// Lấy danh sách câu lạc bộ
exports.getClubs = async (req, res) => {
  const clubs = await Club.find().populate('members', 'username email');
  res.json({ message: "Danh sách câu lạc bộ", data: clubs });
};

// Tham gia câu lạc bộ
exports.joinClub = async (req, res) => {
  const club = await Club.findById(req.params.id);
  if (!club) return res.status(404).json({ message: "Club không tồn tại" });

  if (club.members.includes(req.user.id)) {
    return res.status(400).json({ message: "Bạn đã là thành viên" });
  }

  club.members.push(req.user.id);
  await club.save();

  res.json({ message: "Tham gia câu lạc bộ thành công" });
};

// Rời câu lạc bộ
exports.leaveClub = async (req, res) => {
  const club = await Club.findById(req.params.id);
  if (!club) return res.status(404).json({ message: "Club không tồn tại" });

  club.members = club.members.filter(m => m.toString() !== req.user.id);
  await club.save();

  res.json({ message: "Rời câu lạc bộ thành công" });
};

// Xóa câu lạc bộ (Admin Only)
exports.deleteClub = async (req, res) => {
  await Club.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
