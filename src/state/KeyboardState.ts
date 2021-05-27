import { makeAutoObservable } from "mobx";
import { KeyboardHookEvent } from "../utils/keyboardHook";

export default class KeyboardState {
    pressed = new Map<string, KeyboardHookEvent>();
    constructor() {
        makeAutoObservable(this);
    }
}
