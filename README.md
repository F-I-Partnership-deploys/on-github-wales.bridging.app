The objective of this project is to create a PWA that is deployable by finance providers and brokers.

Without helper files which are in the reporsitory and minimal written content the code base and necessary images are less than 142K (158K with a bit of data in the tbody of the indexhtml file)

The PWA files can be deployed to anything that can serve up some web pages (travel router / anyoldserver.com) and will behave as a SPA or static pages with SPA's.

The simplicity of no directory hireachy allows the application to be deployed to the same filespace as the web interface on a OpenWRT system (with the exception of the index.html file, the app is asscessed via the app-main.html page in this usecase).

Keeping the dataset on the index/start page small.
--------------------------------------------------
The initial data load is the Tbody section of a table as plain html. This is to reduce the number of nodes per record, not rely on time-expensive calls to other resources (API calls etc or loeding anything unnecessary before a first paint).


Drawing in further data from Google Sheets
------------------------------------------
The project is to be developed to allow finance professionals to generate their own data that the app can ingest. A viable entry point is Google Sheets as a published dataset in a spreadsheet can act as a data source.

The application is to render the HTML in the index file then on page load or on interaction load a full interface and extensive dataset the base application used google Sheets as a datasource to reduce the technical requirements to entry.



Deploy to GitHub?
-----------------
The hope in publishing to GitHub is manyfold:

1) To allow inspection of code.
2) CI.
3) To allow finance professionals to clone the repo to their own GH page for testing or to allow the code to be downloaded to be deployed where chosen.



Included Libraries
------------------
csv.min.js          https://code-boxx.com/ MIT
sorta.css           https://code-boxx.com/ MIT
sorta.js            https://code-boxx.com/ MIT
workbox-sw.js       Google



Heper files are included (as opposed to being served from a CDN) to ensure all files are served from the same origin.
