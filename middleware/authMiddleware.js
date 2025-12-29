const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 1. protect
exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Bạn chưa đăng nhập. Không có token!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(404).json({ message: "User không tồn tại!" });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Token không hợp lệ hoặc đã hết hạn",
            error: error.message
        });
    }
};

// 2. authorize
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: `Bạn không có quyền truy cập. Chỉ dành cho: ${roles.join(", ")}`
            });
        }
        next();
    };
};

// 3. adminOnly
exports.adminOnly = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Chỉ admin mới được truy cập!" });
    }
    next();
};
