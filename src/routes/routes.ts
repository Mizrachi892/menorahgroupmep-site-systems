import {Router} from "express";
import type {Router as ExpressRouter} from "express";

import {Role} from "@menorahgroupmep/common";
import {secureService} from "@menorahgroupmep/auth";
import {SITE_SYSTEMS_ROUTES} from "@menorahgroupmep/routes";

import {siteSystemsController} from "../controller/siteSystems.controller";

const siteSystemsRouter: ExpressRouter = Router();

/* ------------------------------------------------------------------
 * Internal API - Microservice to Microservice
 * ------------------------------------------------------------------ */


/* ------------------------------------------------------------------
 * Public API - Through Gateway
 * ------------------------------------------------------------------ */

siteSystemsRouter.get(
    SITE_SYSTEMS_ROUTES.health,
    siteSystemsController.getServiceHealth,
);

siteSystemsRouter.get(
    SITE_SYSTEMS_ROUTES.list,
    secureService.verifyRole(
        Role.Administrator,
        Role.Manager,
        Role.Operator,
        Role.Viewer,
    ),
    siteSystemsController.getSiteSystemsList,
);

siteSystemsRouter.get(
    SITE_SYSTEMS_ROUTES.byId,
    secureService.verifyRole(
        Role.Administrator,
        Role.Manager,
        Role.Operator,
        Role.Viewer,
    ),
    siteSystemsController.getSingleSiteSystem,
);

siteSystemsRouter.get(
    SITE_SYSTEMS_ROUTES.systemsBySiteId,
    secureService.verifyRole(
        Role.Administrator,
        Role.Manager,
        Role.Operator,
        Role.Viewer,
    ),
    siteSystemsController.getSystemsBySiteId,
);

siteSystemsRouter.get(
    SITE_SYSTEMS_ROUTES.sitesBySystemId,
    secureService.verifyRole(
        Role.Administrator,
        Role.Manager,
        Role.Operator,
        Role.Viewer,
    ),
    siteSystemsController.getSitesBySystemId,
);

export {siteSystemsRouter};