const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const [command, pluginPath] = process.argv.slice(2);
const Plugin = require(path.resolve(pluginPath));
const Mongoose = require('mongoose');


const { dbConfig } = require(path.join(process.cwd(), 'config/database'));
const { PluginModel } = require(path.join(process.cwd(), 'src/database/mongodb/plugin/plugin.model'));

async function connect() {
    await Mongoose.connect(dbConfig.mongodb.URI);
    console.log('Connected to database');
}

async function install() {
    await connect();
    const plugin = await PluginModel.findOne({ path: pluginPath });
    if(!plugin) {
        await PluginModel.create(Plugin.install());
    }
}

async function uninstall() {
    await connect();
    const plugin = await PluginModel.findOne({ path: pluginPath });
    if (plugin) {
        await PluginModel.deleteOne({ path: pluginPath });
    }
    console.log('Uninstalled successfully');
    process.exit(0);
}

async function activate() {
    await connect();
    const plugin = await PluginModel.findOne({ path: pluginPath });
    if (!plugin) {
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
    if (!plugin) {
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
    default:
        throw new Error(`${command} is not a valid command`);
}

export { }