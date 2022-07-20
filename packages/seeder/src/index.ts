import { connectToDatabase } from "./mongodb.connect";
import * as fs from 'fs';
import * as path from 'path';

async function run() {

    try {
        const seederfiles = getListOfFiles('./src');
        await connectToDatabase();

        for (const file of seederfiles) {
            const fileName = file.replace('.ts', '');
            const { seed } = await import(`./${fileName}`);
            await seed();
        }
    }
    catch (err) {
        console.error(err);
        return;
    }
}

const getListOfFiles = (rootDir) => {
    const seederFiles = [];
    const rootFilesAndDirectories = fs.readdirSync(rootDir);

    rootFilesAndDirectories.forEach(fileOrDirectory => {
        const absoluteFilePath = path.join(rootDir, fileOrDirectory);
        if (fs.statSync(absoluteFilePath).isDirectory()) {
            const seederFile = fs.readdirSync(absoluteFilePath).filter((fileOrDirectory) => fileOrDirectory.match(/seeder/));
            seederFiles.push(path.join(fileOrDirectory, seederFile[0]));
        }
    });
    return seederFiles;
}

run().finally(() => {
    process.exit(0)
})