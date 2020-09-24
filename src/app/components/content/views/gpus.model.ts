

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
    id: number;
    title: string;
    shortStats: string;
    vram: number;
    image: string;
    price: number;
    gpumodel: number;
    producer: number;
    memorytype: number;
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
