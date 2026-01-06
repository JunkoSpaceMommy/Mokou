"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// --- CLOTHES --- \\
const moko_hand = __importStar(require("../db/moko_hand.json"));
const moko_head = __importStar(require("../db/moko_head.json"));
const moko_lower = __importStar(require("../db/moko_lower.json"));
const moko_upper = __importStar(require("../db/moko_upper.json"));
class SampleTrader {
    mod;
    constructor() {
        this.mod = "servph-junkocommreinsen";
    }
    postDBLoad(container) {
        const tables = container.resolve("DatabaseServer").getTables();
        const jsonUtil = container.resolve("JsonUtil");
        // USEC Contractor
        tables.templates.customization[moko_hand._id] = moko_hand;
        tables.templates.customization[moko_head._id] = moko_head;
        tables.templates.customization[moko_lower._id] = moko_lower;
        tables.templates.customization[moko_upper._id] = moko_upper;
    }
}
module.exports = { mod: new SampleTrader() };
//# sourceMappingURL=mod.js.map