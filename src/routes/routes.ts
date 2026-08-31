import {Router} from "express";
import type {Router as ExpressRouter} from "express";

import {Role} from "@menorahgroupmep/common";
import {secureService} from "@menorahgroupmep/auth";
import {siteSystemsController} from "../controller/siteSystems.controller";

const siteSystemsRouter: ExpressRouter = Router();

/* ------------------------------------------------------------------
 * Internal API - Microservice to Microservice
 * ------------------------------------------------------------------ */


/* ------------------------------------------------------------------
 * Public API - Through Gateway
 * ------------------------------------------------------------------ */

siteSystemsRouter.get("/getServiceHealth", siteSystemsController.getServiceHealth);
siteSystemsRouter.get("/getSiteSystemsList", secureService.verifyRole(Role.Administrator, Role.Manager, Role.Operator, Role.Viewer), siteSystemsController.getSiteSystemsList);
siteSystemsRouter.get("/getSingleSiteSystem/:id", secureService.verifyRole(Role.Administrator, Role.Manager, Role.Operator, Role.Viewer), siteSystemsController.getSingleSiteSystem);
siteSystemsRouter.get("/getSystemsBySiteId/:id", secureService.verifyRole(Role.Administrator, Role.Manager, Role.Operator, Role.Viewer), siteSystemsController.getSystemsBySiteId);
siteSystemsRouter.get("/getSitesBySystemId/:id", secureService.verifyRole(Role.Administrator, Role.Manager, Role.Operator, Role.Viewer), siteSystemsController.getSitesBySystemId);

export {siteSystemsRouter};