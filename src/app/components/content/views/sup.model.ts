

interface INames{
    t: string;
    selected: boolean;
}

interface IType{
    id: number;
    title: string;
    name: string;
    names: INames[];
}

interface IGpuStats{
    types: IType[]
}

export interface IItem{
    id: string,
    title: string,
    description: string,
    qty: number,
    sentTime: string,
    price: number,
    guarantee: string,
    image: string,
    producer: string,
    type: string,
    technology: string,
    purpose: string,
    oar: string,
    handle: string,
    thickness: string,
    length: string,
    width: string,
    [index: string]: string | number
}

export interface IGpusModel{
        items: IItem[];
        gpuStats: IGpuStats;
}

export interface IFilterObject{
    producer: number[];
    gpumodel: number[];
    memorytype: number[];
    vram: number[];
}
