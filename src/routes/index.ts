import { Router } from "express";

import { GitHubRepositoryRoutes } from "./GitHub.routes";
import { TagRepositoryRoutes } from "./Tag.routes";

const router = Router();

router.use("/repository", GitHubRepositoryRoutes);
router.use("/tag", TagRepositoryRoutes);

export { router };
