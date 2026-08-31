import {siteSystemsDao} from "../dao/siteSystems.dao";
import {ResourceNotFound} from "@menorahgroupmep/common";

class SiteSystemsService {

    public async getSiteSystemsList() {
        return await siteSystemsDao.getSiteSystemsList();
    }

    public async getSingleSiteSystem(id: number) {
        const siteSystem = await siteSystemsDao.getSingleSiteSystem(id);
        if (!siteSystem) {
            throw new ResourceNotFound(id);
        }
        return siteSystem;
    }

    public async getSystemsBySiteId(siteId: number) {
        return await siteSystemsDao.getSystemsBySiteId(siteId);
    }

    public async getSitesBySystemId(systemId: number) {
        return await siteSystemsDao.getSitesBySystemId(systemId);
    }
}

export const siteSystemsService = new SiteSystemsService();