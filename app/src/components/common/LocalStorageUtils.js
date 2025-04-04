import { AES, enc } from 'crypto-js';

const createEncryptionModule = () => {
    const secretKey = import.meta.env.VITE_LOCAL_STORAGE_SECREATE_KEY;

    const encryptData = (name, data) => {
        try {
            const jsonString = JSON.stringify(data);
            const encryptedData = AES.encrypt(jsonString, secretKey).toString();
            localStorage.setItem(name, encryptedData);
        } catch (error) {
            console.error(`Error encrypting data for ${name}:`, error);
        }
    };

    const becryptData = (name) => {
        const encryptedData = localStorage.getItem(name);
        

        if (!encryptedData) {
            return null;
        } else {
            try {
                const decrypted = AES.decrypt(encryptedData, secretKey).toString(enc.Utf8);
                return JSON.parse(decrypted);
            } catch (error) {
                console.log(`Decryption error for ${name}:`, error);
            }
        }
    };

    const setSecretKey = (newSecretKey) => {
        secretKey = newSecretKey;
    };

    return {
        encryptData,
        becryptData,
        setSecretKey,
    };
};

const encryptionModule = createEncryptionModule();

export default encryptionModule;
