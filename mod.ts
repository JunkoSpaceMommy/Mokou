/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/no-var-requires */
import { DependencyContainer } from "tsyringe";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ITraderAssort } from "@spt-aki/models/eft/common/tables/ITrader";
import { IBotConfig } from "@spt-aki/models/spt/config/IBotConfig";
import { ITraderConfig } from "@spt-aki/models/spt/config/ITraderConfig";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";



// --- CLOTHES --- \\
import * as moko_hand from "../db/moko_hand.json";
import * as moko_head from "../db/moko_head.json";
import * as moko_lower from "../db/moko_lower.json";
import * as moko_upper from "../db/moko_upper.json";
// --- CLOTHES --- \\



import { ICustomizationItem } from "@spt-aki/models/eft/common/tables/ICustomizationItem";


class SampleTrader implements IPostDBLoadMod {
    mod: string

    constructor() {
        this.mod = "servph-junkocommreinsen";
    }


    public postDBLoad(container: DependencyContainer): void {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const jsonUtil = container.resolve<JsonUtil>("JsonUtil");


        // USEC Contractor
        tables.templates.customization[moko_hand._id] = moko_hand as ICustomizationItem 
        tables.templates.customization[moko_head._id] = moko_head as ICustomizationItem
        tables.templates.customization[moko_lower._id] = moko_lower as ICustomizationItem 
        tables.templates.customization[moko_upper._id] = moko_upper as ICustomizationItem 

        
    
}

module.exports = { mod: new SampleTrader() }