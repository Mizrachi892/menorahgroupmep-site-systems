import {SiteSystemsEntity} from "../entity/siteSystems.entity";

class SiteSystemsDao {

    public async getSiteSystemsList() {
        return await SiteSystemsEntity.findAll({
            order: [["id", "ASC"]]
        });
    }

    public async getSingleSiteSystem(id: number) {
        return await SiteSystemsEntity.findByPk(id);
    }

    public async getSystemsBySiteId(siteId: number) {
        return await SiteSystemsEntity.findAll({
            where: {
                site_id: siteId
            },
            order: [["id", "ASC"]]
        });
    }

    public async getSitesBySystemId(systemId: number) {
        return await SiteSystemsEntity.findAll({
            where: {
                system_id: systemId
            },
            order: [["id", "ASC"]]
        });
    }
}

export const siteSystemsDao = new SiteSystemsDao();