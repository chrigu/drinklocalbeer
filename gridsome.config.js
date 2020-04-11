// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Drink local beer',
  siteUrl: 'https://drinklocalbeer.ch/',
  siteDescription: 'Unterstütze Schweizer Brauer',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Brewery',
        path: './content/breweries/**/*.md',
      }
    }
  ],
  templates: {
    Brewery: '/:title'
  }
}
