import { Router, Request, Response } from "express";
import { authenticateToken, authorizeRoles } from "../middleware/auth.js";
import { UserRole } from "../models/User.js";

const router = Router();

/**
 * @route   GET /api/inspector/dashboard
 * @desc    Get inspector dashboard data (placeholder)
 * @access  Private - Inspector only
 */
router.get(
  "/dashboard",
  authenticateToken,
  authorizeRoles(UserRole.INSPECTOR),
  (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: "Inspector Dashboard",
      data: {
        // Placeholder - actual dashboard data will be implemented later
        info: "This is a placeholder for the Inspector Dashboard",
      },
    });
  }
);

export default router;
