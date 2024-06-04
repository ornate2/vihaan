// srv/service.cds
using { vihaan.data as db } from '../db/schema';

service CatalogService {
    @odata.draft.enabled
    entity Materials as projection on db.Materials;

    
}


