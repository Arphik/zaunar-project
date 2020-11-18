

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
    id: string;
    title: string;
    description: string;
    qty: number;
    price: number;
    shortStats: string;
    vram: string;
    image: string;
    gpumodel: string;
    producer: string;
    memorytype: string;
    connectors: string;
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
