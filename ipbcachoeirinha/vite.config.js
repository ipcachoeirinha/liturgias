import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import fs from 'fs';
import path from "path"

function copyFilesPlugin() {
  return {
    name: "copy-files",
    writeBundle(options, bundle) {
      const isSsrBundle = options.dir
        && options.dir.endsWith("build" + path.sep + "server");

      if(!isSsrBundle) {
        return;
      }
      console.info('Copiando arquivos para build/server');
      const projectRoot = process.cwd();
      const buildFolder = options.dir;
      const filesToCopy = [
        `${projectRoot}/app/templates/template.html`,
      ]

      if(!fs.existsSync(buildFolder)) {
        throw new Error('Pq não tem build folder?');
      }

      filesToCopy.forEach(file => {
        const fileName = path.basename(file);
        fs.copyFileSync(file, `${buildFolder}/${fileName}`);
      });

      console.info('Arquivos copiados');
    }
  }
}

export default defineConfig({
  plugins: [reactRouter(), copyFilesPlugin()],
});
