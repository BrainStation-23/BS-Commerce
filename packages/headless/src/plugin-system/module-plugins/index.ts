import { RouterModule } from '@nestjs/core';
import { default as DemoModule } from './demo';

//take these from DB
export const InstalledModuleList = [
    DemoModule
];

//take these from DB
export const LoadableModuleList = [
    DemoModule,
    RouterModule.register([{
        path: 'demo',
        module: DemoModule,
    }])
];
