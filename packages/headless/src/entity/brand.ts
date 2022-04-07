export class Brand {
    info:{
        id: string,
        name: string
        description: string,
        allowToSelectPageSize: boolean,
        published: boolean,
        displayOrder: number,
        pageSizeOptions: number[]
    };
    meta: {
        keywords: string,
        description: string,
        title: string,
        SEFN: string
    }
}
