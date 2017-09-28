import { IMdlTableModelItem } from '@angular-mdl/core';
export interface IPersonItem extends IMdlTableModelItem {
    id: string;
    name: string;
    sex: string;
    team: string;
    account: string;
    role: string;
    position: string;
    selected: boolean;
}
