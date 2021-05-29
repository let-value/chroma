import { Key } from "../chroma-js/src";
import {
    editingKeys,
    getChromaKeys,
    modifierKeys,
    systemKeys
} from "../utils/keyCode";

export const modifierChromaKeys = getChromaKeys(modifierKeys);
export const systemChromaKeys = [...getChromaKeys(systemKeys), Key.Function];
export const editingChromaKeys = getChromaKeys(editingKeys);
