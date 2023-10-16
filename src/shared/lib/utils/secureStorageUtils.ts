import * as SecureStore from "expo-secure-store";
import { system } from "../constants";

const secureStorageUtils = {
  getSavedUser: async () => {
    return await SecureStore.getItemAsync(system.secureStorageUserKey);
  },
  setSavedUser: async (username: string) => {
    SecureStore.setItemAsync(system.secureStorageUserKey, username);
  },
  deleteSavedUser: async () => {
    await SecureStore.deleteItemAsync(system.secureStorageUserKey);
  },
};

export default secureStorageUtils;
