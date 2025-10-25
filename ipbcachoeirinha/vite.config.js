import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import fs from 'fs';
import path from "path"

function copyFilesPlugin() {
  return {
    name: "copy-files",
    closeBundle() {
      const projectRoot = process.cwd();
      const buildFolder = `${projectRoot}/build/server`;
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
    }
  }
}

export default defineConfig({
  plugins: [reactRouter(), copyFilesPlugin()],
});
