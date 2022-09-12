import { PluggableEntities } from 'src/plugin-system/pluggable';
import { PaymentStrategy } from '../payment-strategy';

class BkashPayment extends PaymentStrategy {
    private readonly name: string;
    private readonly path: string;
    private readonly extensibleFor: string;
    private readonly version: string;
    private readonly description: string;
    private readonly author: string;
    private readonly isLoadable: boolean;

    constructor() {
        super();
        this.name = 'Bkash';
        this.path = 'src/plugins/bkash-payment';
        this.extensibleFor = PluggableEntities.PAYMENT;
        this.version = '1.0.0';
        this.description = 'Bkash plugin system';
        this.author = 'Habibur Rahman';
        this.isLoadable = true;
    }

    install() {
        console.log("Bkash Payment plugin is installing...");

        // create necessary database tables logics if needed

        return {
            name: this.name,
            path: this.path,
            extensibleFor: this.extensibleFor,
            version: this.version,
            description: this.description,
            author: this.author,
            isLoadable: this.isLoadable
        };
    }

    charge() {
        console.log('Bkash payment done');
    }
}

module.exports = new BkashPayment();
export { }