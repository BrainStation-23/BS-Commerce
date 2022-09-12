export class Plugin {
    id?: string;
    name: string;
    extensibleFor: string;
    path: string;
    version?: string;
    description?: string;
    author?: string;
    isLoadable: boolean;
}