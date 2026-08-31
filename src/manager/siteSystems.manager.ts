import {siteSystemsService} from "../service/siteSystems.service";

class SiteSystemsManager {

    public async getSiteSystemsList() {
        return await siteSystemsService.getSiteSystemsList();
    }

    public async getSingleSiteSystem(id: number) {
        return await siteSystemsService.getSingleSiteSystem(id);
    }

    public async getSystemsBySiteId(siteId: number) {
        return await siteSystemsService.getSystemsBySiteId(siteId);
    }

    public async getSitesBySystemId(systemId: number) {
        return await siteSystemsService.getSitesBySystemId(systemId);
    }
}

export const siteSystemsManager = new SiteSystemsManager();