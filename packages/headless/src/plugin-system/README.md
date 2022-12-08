# BS-COMMERCE
## Plugin System

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A plugin system where various aims of plugins are installed, and are loaded dynamically. The plugin works like a component of the system.

## Features

- The system manages the plugins by loading and integrating to the system
- Plugins are fully independent
- Plugins extend the core functionalites of the system
- Plugins are installed, activated, deactivated, uninstalled
- If necessary, plugins can create it's related database tables

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Explanation
The system opens various interfaces to the plugins to be extended by the plugins. So let's start.

Let's create a file **pluggable.ts**.

```
export const PluggableEntities = {
    PAYMENT: 'PAYMENT'
};
```

Each entity which will be extended in near future, should be written here. So that developer can keep track for which the plugin is being made.

Then create an interface **payment-strategy.ts**, where there are various abstract strategies which are the backbone of the plugins. Each plugin will extend this interface to start.

```sh
export abstract class PaymentStrategy {
    abstract charge(): void;
}
```

Here **charge** method is an abstract method. Every payment plugin will extend this interface and override this charge method and do it's implementation of it's own.

Now create a **payment-context.ts** file which will be used to communicate to the plugins with the system. The system knows this file, this file knows the plugin.

```
import { PaymentStrategy } from "./payment-strategy";

export class PaymentContext {
    constructor(private readonly paymentStrategy: PaymentStrategy) {}

    executePayment(): void {
        this.paymentStrategy.charge();
    }
}
```

Here, paymentStrategy object of PaymentStrategy type is the plugin object and calls it's own charge method when the system calls the **executePayment** method. So **PaymentContext** is the medium by which the system communicates to the necessary plugin.

Now it's time to create some plugins. 

let's create a **bkash-payment** folder and **index.ts** file in it. The code snippet of index.ts - 

```
import { PaymentStrategy } from '../../modules/payment/plugins/payment-strategy';
import { PluggableEntities } from '../../includes/pluggable';

class BkashPayment extends PaymentStrategy{
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
export{}
```

At first we import **PaymentStrategy** and **PluggableEntities**. We created a class **BkashPayment** and extends **PaymentStrategy** by it. Now we must implement our own charge method and the necessary logics are here. 

When we install this plugin, we need meta data, so in **constructor** we are keeping necessary values. 
- **name** for the plugin-name, 
- **path** for the path of the plugin
- **extensibleFor** is used so that developer can know for which entity the plugin is being made
- **version** is used to keep trac of the version for plugin
- **description** for plugin's information
- **author** for the name of the developer or orgranization
- **isLoadable** - so the system can know this plugin should be integrated or not


And at last we are keeping the **install** method to return the metadata to install this plugin by the system.

Finally we are creating an object and return it from this module, if it's imported.

Similarly create a nagad-payment folder and index.ts file in it. The code snippet of index.ts-

```
import { PaymentStrategy } from '../../modules/payment/plugins/payment-strategy';
import { PluggableEntities } from '../../includes/pluggable';

class NagadPayment extends PaymentStrategy{
    private readonly name: string;
    private readonly path: string;
    private readonly extensibleFor: string;
    private readonly version: string;
    private readonly description: string;
    private readonly author: string;
    private readonly isLoadable: boolean;
    
    constructor() {
        super();
        this.name = 'Nagad';
        this.path = 'src/plugins/nagad-payment';
        this.extensibleFor = PluggableEntities.PAYMENT;
        this.version = '1.0.0';
        this.description = 'Nagad plugin system';
        this.author = 'Habibur Rahman';
        this.isLoadable = true;
    }

    install() {
        console.log("Nagad Payment plugin is installing...");
        
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
        console.log('Nagad payment done');
    }
}

module.exports = new NagadPayment();
export{}
```

Now there are two plugins. One is **bkash-payment** and another is **nagad-payment**. let's keep these two folders in an another folder **plugins**. All plugins which will be made, we will keep here.

Now it's time to install these two plugins. So we are creating a script in **package.json**.

```
"scripts": {
    "plugin": "ts-node plugin.management.ts"
},
```

We run this script by **npm run plugin** with the **command** the **path** of the plugin.

**Commands** are -
- **install**
- **uninstall**
- **activate**
- **deactivate**

So now we have to run 
- **npm run plugin install src/plugins/bkash-payment** and 
- **npm run plugin install src/plugins/bkash-payment**

This command will run a **plugin.management.ts** file. Codes are-

```
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const [command, pluginPath] = process.argv.slice(2);
const Plugin = require(path.resolve(pluginPath));
const Mongoose = require('mongoose');


const { dbConfig } = require(path.join(process.cwd(), 'config/database'));
const { PluginModel } = require(path.join(process.cwd(), 'src/database/mongodb/plugin/plugin.model'));

async function connect () {
    await Mongoose.connect(dbConfig.mongodb.URI);
    console.log('Connected to database');
}

async function install () {
    await connect();
    const plugin = await PluginModel.findOne({ path: pluginPath });
    if(!plugin) {
        await PluginModel.create(Plugin.install());
    }
    console.log('Installed successfully');
    process.exit(0);
}

async function uninstall () {
    await connect();
    const plugin = await PluginModel.findOne({ path: pluginPath });
    if(plugin) {
        await PluginModel.deleteOne({ path: pluginPath });
    }
    console.log('Uninstalled successfully');
    process.exit(0);
}

async function activate() {
    await connect();
    const plugin = await PluginModel.findOne({ path: pluginPath });
    if(!plugin) {
        throw new Error('The plugin is not installed.')
    }
    await PluginModel.updateOne(
        { path: pluginPath },
        {
            isLoadable: true
        }
    );
    console.log('Activated successfully');
    process.exit(0);
}

async function deactivate() {
    await connect();
    const plugin = await PluginModel.findOne({ path: pluginPath });
    if(!plugin) {
        throw new Error('The plugin is not installed.')
    }
    await PluginModel.updateOne(
        { path: pluginPath },
        {
            isLoadable: false
        }
    );
    console.log('Deactivated successfully');
    process.exit(0);
}

switch (command) {
    case 'install':
        install();
        break;
    case 'uninstall': 
        uninstall();
        break;
    case 'activate':
        activate();
        break;
    case 'deactivate':
        deactivate();
        break;
    default : 
        throw new Error(`${command} is not a valid command`);
}

export {}
```

After that two plugin is installed to the system. We can see tha database snippet.

![](https://lh3.googleusercontent.com/4PZ8f7uoetWyGu7dQ47nMPEhraUsp7pNSPVLDp-D1JI1uIJmiNDiICDkshwCNHuY_XGxZQ6O3n5chwbO1NkXB1v8va4iEXvRc2HGVkI1_UYT0Ok1e602dYg47T9ACvYGgI2ZajgkJ58ELwIuiyyatUXKfrk8voj94Irw3CPS8ySxt4Kz38mpepcujTTVNoeFVY0CAVSzutCJeyQpGCz7sSgFersiMwHxdNj1LC7JYoHyEwOcZqBwFVGpfz7Fw_egMHEKloiFYxNGGrtvKYCrHGIOxUINCPhhcRjoo-ZUtnuA--z98fA9KtRnYcRRIq1B-V5lw4Ncih8zyAnuPMa-eqTZWaQ_Jvl2C6svJjCPL0nXu60G6nmVk8AsrS17ODsb1Jq-8H3fB1PvUINxGikde_8kVDPEu5yKCTu2tpt9wc4nfcsDM2k5W0_i9X01L0WpDy-_cADCw2QGMVLzCMGndBjuIaIoIJrtrllZUqA79x8q78MBRXosRUqtrFr_pmoQZLGzRWU5WJRRIuMfLqi9_3O4xUBkQ3Jo6AQ_Rjswms2d7ScKpaJupAAtQ6eqbc7IEDFj3tZfMeUZs2er6y_tDXDTOeUww_YlE14Zxsnu_oXAxlcp7PoUSL4wcfgI1Hp-OSZ9rA3rOdQMJ8uvddvwHKaMv4fWrQ7smJNJubzfFd15AOekyF6Y_dx5LJ9sFWRtFp69c-E762MA1frkr4Qa-GlThMPRNvMEjlpgilMPozeS7yiJMB6ftgj0XQBk5g=w858-h736-no?authuser=0)

Now we will create a **manager.ts** file which will be used to load the plugins dynamically at the run time and provide the system the plugins to do their work.
```
import { PluginModel } from 'src/database/mongodb/plugin/plugin.model';
import { Plugin } from 'src/entity/plugin';

class PluginManager {
    private static pluginManager: PluginManager;
    private readonly pluginList: any[] = [];

    private constructor() {}

    public static getInstance(): PluginManager {
        if(!PluginManager.pluginManager) {
            PluginManager.pluginManager = new PluginManager();
        }
        return PluginManager.pluginManager;
    }

    public async loadPlugins(): Promise<any> {
        const plugins = await PluginModel.find({});
        plugins.forEach(plugin => {
            this.loadPlugin(plugin);
        });
    }

    async loadPlugin(pluginInfo: Plugin) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });

        const path = require('path');
        const relativePath = path.relative('src/modules/payment/plugins', pluginInfo.path);
        const plugin = require(relativePath);
        this.pluginList.push(plugin);
    }

    public getPluginList() {
        return this.pluginList;
    }
}

const pluginManager = PluginManager.getInstance()
pluginManager.loadPlugins();

export default pluginManager;
```

We create a **PluginManager class** and a **pluginManager** object, then using the object we are loading all the plugins and export the the object **pluginManager** from this file.

Total three files are needed for the core system to support plugin system. so we keep these three files in one folder **payment**. The files are **manager.ts**, **payment-strategy.ts**, **payment-context.ts**. And keeps the **pluggable.ts** file as sibling of the **payment** folder. After that keeps the **payment** folder and **pluggable.ts** file in another folder **plugins** which is inside **includes** folder. The image would be better-

![](https://lh3.googleusercontent.com/yR_Pb0Y6AZdZBWaPjeB5_LW0KBQePJJRNCGcJ4qEQs7iyy2jazQWGPQSHzySbVxd7fLD2u0sVKDHlA9G1TO-xygeVutzBmot_uF4pt1Y1ppSLSbxP5xCFLpUTx9OAiar7TH6IX9xcTU82X4NXfYOz0S3HiyeyXHKMG5G2B2_MyFj7hXg-dU-TpN27Gaotyo7MJCIOsU9Ml5RnzIqnXK6SNvw0s96o7c0idm-4DwsaV8l6RWbUENoz-vJt_bCTeynDZZhkfFWEuShGbwgKp35dYQlBurIM8nhglfS7LTQcmgj-tgVYzhqpin7FBKBnqfCCnWjt2_uRa6fmfJE7BjAIaNOlqvW4UOrMQ9RBaynS5x7q1oJ8RK2rKe7thxKu8zKGj7NMu0rymzBFvMZ2Xta8OXT_KUqAuQ8zuet7VntmD7GzUnuqYZYdTDKY3Vce2NAE-NPYjrVN1TfBcGxl8l9MnufuKW-GcfS-juQ0gog4Gmc2MFWvEI5mQMaXwuByYdFaHuRXah7FC2qWIpZucW3LF7SaluE4fd7tVws9xIoKjDkGz4VukL-LdbhE8nDzs8yUtxschuYL5LFQTsGJmLGVZJKdQmDA6ZNdKkdyL_HypEY_U-y78xE79bW2ano23Uvey4I7cQyjl34XDghwzvbJZlhPaAPCIlivnz_vbOWbpICh4JDGpfLkcTPo35-zluHhS4tDEPkhUWYjQ_KBybt_NeUrfiyj5oHKz-7fWZAnsCUDHh-N9qeYqkSjJdhhg=w506-h833-no?authuser=0)

Notice, **plugins** and **includes** are siblings inside **src** folder.

Now we will use the plugins dynamically in the system. There are already a **payment.service.ts** which is used to make a payment for a order. Code-snippet-

```
import { Injectable } from '@nestjs/common';
import pluginManager from 'src/includes/plugins/payment/manager';
import { PaymentContext } from 'src/includes/plugins/payment/payment-context';
import { PluggableEntities } from 'src/includes/pluggable';
import { PluginModel } from 'src/database/mongodb/plugin/plugin.model';

@Injectable()
export class PaymentService {
    async createPayment(data: any): Promise<any> {
        // check whether orderId exists in the database

        // check whether orderId of the user and requested user same

        // check whether order status is not cancelled
        const paymentOptions = pluginManager.getPluginList();
        const context = paymentOptions.find(paymentOption => paymentOption.name === data.paymentMethod);

        const paymentContext = new PaymentContext(context);
        paymentContext.executePayment();

        return "Demo plugin is working perfectly.";
    }

    async getPaymentMethods() {
        return await PluginModel.find({ extensibleFor: PluggableEntities.PAYMENT});
    }
}

```

We imported **pluginManager** object from the **manager.ts** and **PaymentContext** class from **payment-context.ts**. Then in createPayment method we need all the plugins, so calling **pluginManager.getPluginList()** and keeping all the plugin object in **paymentOptions**. We are extracting the context by which the payment is executed. Then passing the context object to the **new PaymentContext(context)** and gets an object **paymentContext** and call it's method **executePayment()**.

