import {Request, Response} from "express";
import {StatusCode, ServiceHealth, SERVICE_NAMES} from "@menorahgroupmep/common";
import {siteSystemsManager} from "../manager/siteSystems.manager";
import {serviceStartTime} from "../config/serviceStartTime";

class SiteSystemsController {

    public async getServiceHealth(request: Request, response: Response): Promise<void> {

        const health: ServiceHealth = {
            service: SERVICE_NAMES.siteSystems,
            status: "UP",
            timestamp: new Date().toISOString(),
            version: "1.0.0",
            startedAt: serviceStartTime.toISOString(),
        };
        response.status(StatusCode.OK).json(health);
    }


    public async getSiteSystemsList(request: Request, response: Response): Promise<void> {
        const siteSystems = await siteSystemsManager.getSiteSystemsList();
        response.status(StatusCode.OK).json(siteSystems);
    }


    public async getSingleSiteSystem(request: Request, response: Response): Promise<void> {
        const id = Number(request.params.id);
        const siteSystem = await siteSystemsManager.getSingleSiteSystem(id);
        response.status(StatusCode.OK).json(siteSystem);
    }


    public async getSystemsBySiteId(request: Request, response: Response): Promise<void> {
        const siteId = Number(request.params.id);
        const systems = await siteSystemsManager.getSystemsBySiteId(siteId);
        response.status(StatusCode.OK).json(systems);
    }


    public async getSitesBySystemId(request: Request, response: Response): Promise<void> {
        const systemId = Number(request.params.id);
        const sites = await siteSystemsManager.getSitesBySystemId(systemId);
        response.status(StatusCode.OK).json(sites);
    }
}

export const siteSystemsController = new SiteSystemsController();