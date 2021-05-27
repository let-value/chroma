import { makeAutoObservable } from "mobx";
import KeyboardState from "./KeyboardState";

export default class State {
    keyboard = new KeyboardState();
    isDebug: boolean = false;

    constructor() {
        makeAutoObservable(this, { keyboard: false });
    }
}
