


const useStorage = ()=>{

    const setStorage=(key, value)=>{
        localStorage.setItem(key, JSON.stringify(value));
        window.dispatchEvent(new Event("storage"));
    };
    const getStorage=(key)=>{
        return JSON.parse(localStorage.getItem(key));
    };

    const setUser=(data)=>{
        localStorage.setItem("user", JSON.stringify(data));
        window.dispatchEvent(new Event("storage"));
    };
    const getUser=()=>{
        return JSON.parse(localStorage.getItem("user"));
    };
    const setConfigs=(data)=>{
        localStorage.setItem("app_configs", JSON.stringify(data));
        window.dispatchEvent(new Event("storage"));
    };
    const clear=()=>{
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
    };
    const getConfigs=()=>{
        return JSON.parse(localStorage.getItem("app_configs"));
    };

    const onStorageUpdated=(f)=>{
        window.addEventListener('storage', f);
    }

    return {setStorage, getStorage, getUser, setUser, clear, setConfigs, getConfigs}

}

export {useStorage}