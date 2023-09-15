# About

This is the website project for our church to show presentation slides during the liturgy.

It's a Remix.run app that renders in its routes Reveal.js slides styled with TailwindCSS.

To run this website no database is needed, but you will need a Cloudinary account for the assets.

Make sure to setup cloudinary exporting the environment variable `CLOUDINARY_URL` with your URL (found in the cloudinary dashboard).

# Usage

Clone the repository:
`git clone git@github.com:ipcachoeirinha/liturgias.git`

Enter `ipca-site` directory:

`cd ./ipca-site`

Run `npm install`:

`npm install`

Then start the dev server at http://localhost:3000

`npm run dev`

If you want to use TailwindCSS you also have to start its watcher running:

`npm run tw:watch`

If you need custom CSS styles edit `app/assets/main.css`.

If you set up the Cloudinary URL you can access the website normally. Of coure, because you don't have the assets from my account some assets will break.

You can create your own route-slides creating a new route at `app/routes`. Copy one of the routes implemented and modify as you need. If you have any problems please make sure you understand how Remix.run apps and Reveal.js work. The same for styling with TailwindCSS.

The `CDN_ASSETS_LIST` is a list of assets that will be found in Cloudinary. Edit the list with your needs. The `id` field is the same ID on Cloudinary. The `extension` field is for URL building (check `lib.server.js`) and the `resourceType` is for Cloudinary URL building. If for some reason your Cloudinary URLs are not working make sure `id` and `resourceType` were informed correctly.