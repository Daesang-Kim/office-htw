interface IKEYVALUE {
    key: string;
    value: string;
}
const keygen = (pk: string, key: string) => `${pk}-${key}`;

export const getAllData: any = (pk?: string) => {
    if (pk) {
        const data = { ...localStorage };
        const filteredData = Object.keys(data).filter(item => item.includes(pk));
        const retObj = {};
        filteredData.forEach(item => {
            const key = item.replace(pk + '-' , '');
            retObj[key] = data[item];
        })
        return retObj;
    }
    return { ...localStorage };
}

export const setData = (pk: string, key: string, value: string) => {
    localStorage.setItem(keygen(pk, key), value);
}

export const getData = (pk: string, key: string) => localStorage.getItem(keygen(pk, key))

export const setAllData: any = (pk: string, dataSet: IKEYVALUE[]) => {
    dataSet.forEach(item => {
        localStorage.setItem(keygen(pk, item.key), item.value);
    })
}