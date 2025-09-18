import { createContext, PropsWithChildren, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { themeSettingsTypes } from "theme";
import { initialThemeSettings } from "../constants";

export const SettingsContext = createContext({
  settings: initialThemeSettings,
  saveSettings: (arg: themeSettingsTypes) => {},
});

// ==============================================================
interface SettingsProviderProps extends PropsWithChildren {
  defaultSettings: themeSettingsTypes;
}
// ==============================================================

const SettingsProvider = ({ children, defaultSettings }: SettingsProviderProps) => {
  // const { data: settings, setData: setStoreSettings } = useLocalStorage(
  //   "settings",
  //   initialSettings
  // );

  // const saveSettings = (updateSettings: themeSettingsTypes) => setStoreSettings(updateSettings);

  const { settings, setSettings: saveSettings } = useSettingsCookie(defaultSettings);

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettingsCookie = (defaultSettings: themeSettingsTypes) => {
  const [settings, setSettings] = useState(defaultSettings);

  const handleChangeSettings = () => {
    Cookie.set("settings", JSON.stringify(settings));
  };

  useEffect(() => {
    handleChangeSettings();
  }, [settings]);

  return { settings, setSettings };
};

export default SettingsProvider;
