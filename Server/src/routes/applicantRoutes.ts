import { Router, Request, Response } from "express";
import { authenticateToken, authorizeRoles } from "../middleware/auth.js";
import { UserRole } from "../models/User.js";

const router = Router();

/**
 * @route   GET /api/applicant/dashboard
 * @desc    Get applicant dashboard data (placeholder)
 * @access  Private - Applicant only
 */
router.get(
  "/dashboard",
  authenticateToken,
  authorizeRoles(UserRole.APPLICANT),
  (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: "Applicant Dashboard",
      data: {
        // Placeholder - actual dashboard data will be implemented later
        info: "This is a placeholder for the Applicant Dashboard",
      },
    });
  }
);

export default router;
