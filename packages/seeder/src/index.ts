import { connectToDatabase } from './mongodb.connect';
import * as fs from 'fs';
import * as path from 'path';
import { Model } from 'mongoose';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

async function run() {
  try {
    const srcFiles = getSrcFiles();
    await connectToDatabase();

    const modelFiles = srcFiles
      .filter((file) => file.match(/model/))
      .map((file) => file.replace('.ts', ''));

    const seederFiles = srcFiles
      .filter((file) => file.match(/seeder/))
      .map((file) => file.replace('.ts', ''));

    const collectionsContainingDocs = await getCollectionsContainingDocs(
      modelFiles
    );

    // If there are collections which contains data already then ask user
    // for confirmation if he wants to delete those data or not.
    let isConfirmed = true;
    if (collectionsContainingDocs.length > 0) {
      isConfirmed = await getConfirmation(collectionsContainingDocs);
    }

    if (isConfirmed) {
      await runSeeders(seederFiles);
    } else {
      console.log('Seeder Skipped');
    }
  } catch (err) {
    console.error(err);
    return;
  }
}

const getSrcFiles = () => {
  const srcDir = './src';
  const srcFiles: string[] = [];
  const srcDirectory = fs.readdirSync(srcDir);

  srcDirectory.forEach((fileOrSubDirectory) => {
    const modulePath = path.join(srcDir, fileOrSubDirectory);
    if (fs.statSync(modulePath).isDirectory()) {
      const moduleFiles = fs.readdirSync(modulePath);
      srcFiles.push(
        ...moduleFiles.map((filePath) => `${fileOrSubDirectory}/${filePath}`)
      );
    }
  });
  return srcFiles;
};

const getCollectionsContainingDocs = async (
  modelFiles: string[]
): Promise<string[]> => {
  try {
    const collectionsContainingDocs = [];
    for (const file of modelFiles) {
      const { default: model }: { default: Model<any> } = await import(
        `./${file}`
      );
      const count = await model.estimatedDocumentCount({});
      if (count > 0) {
        collectionsContainingDocs.push(model.collection.name);
      }
    }
    return collectionsContainingDocs;
  } catch (err) {
    console.error('Error in getCollectionsContainingDocs', err);
    return [];
  }
};

const runSeeders = async (seederFiles: string[]): Promise<void> => {
  try {
    for (const file of seederFiles) {
      const { seed }: { seed: () => Promise<void> } = await import(`./${file}`);
      await seed();
    }
  } catch (err) {
    console.error('Error in runSeeders', err);
  }
};

const getConfirmation = async (collections: string[]): Promise<boolean> => {
  try {
    const rl = readline.createInterface({ input, output });

    return new Promise((resolve, reject) => {
      console.log(
        'All the previous data of thse collections will be lost forever:'
      );
      console.log('\x1b[36m%s\x1b[0m', `${collections.join(',')}`);
      rl.question(`Do you want to proceed? (yes/no)\n`, (answer) => {
        rl.close();
        return resolve(answer.toLowerCase() === 'yes');
      });
    });
  } catch (err) {
    return Promise.resolve(false);
  }
};

run().finally(() => process.exit(0));
