import { makeAutoObservable } from "mobx";

export default class KeyboardState {
    constructor() {
        makeAutoObservable(this);
    }
}
