import { WebContents, BrowserWindow } from "electron";

class Windows {

    private _HomeBrowserWindow!: BrowserWindow;
    private _CurrentBrowserWindow!: BrowserWindow;
    private _SettingBrowserWindow!: BrowserWindow;

    private _CurrentWindowNew!: any;

    // @ts-ignore
    private _HomeBrowserWindowWebContents!: typeof WebContents;
    // @ts-ignore
    private _SettingBrowserWindowWebContents!: typeof WebContents;

    get CurrentWindowNew(): any {
        return this._CurrentWindowNew;
    }

    set CurrentWindowNew(value: any) {
        this._CurrentWindowNew = value;
    }

    get CurrentBrowserWindow(): Electron.BrowserWindow {
        return this._CurrentBrowserWindow;
    }

    set CurrentBrowserWindow(value: Electron.BrowserWindow) {
        this._CurrentBrowserWindow = value;
    }

    get HomeBrowserWindow(): BrowserWindow {
        return this._HomeBrowserWindow;
    }

    set HomeBrowserWindow(value: BrowserWindow) {
        this.CurrentBrowserWindow = value;
        this._HomeBrowserWindow = value;
    }

    get SettingBrowserWindow(): BrowserWindow {
        return this._SettingBrowserWindow;
    }

    set SettingBrowserWindow(value: BrowserWindow) {
        this.CurrentBrowserWindow = value;
        this._SettingBrowserWindow = value;
    }

    // @ts-ignore
    get HomeBrowserWindowWebContents(): typeof WebContents {
        return this._HomeBrowserWindowWebContents;
    }

    // @ts-ignore
    set HomeBrowserWindowWebContents(value: typeof WebContents) {
        this._HomeBrowserWindowWebContents = value;
    }

    // @ts-ignore
    get SettingBrowserWindowWebContents(): typeof WebContents {
        return this._SettingBrowserWindowWebContents;
    }

    // @ts-ignore
    set SettingBrowserWindowWebContents(value: typeof WebContents) {
        this._SettingBrowserWindowWebContents = value;
    }
}

export default new Windows();
