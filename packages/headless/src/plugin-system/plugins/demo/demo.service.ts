import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
    getDemoText(): string {
        return 'Demo plugin is working perfectly.';
    }
}
