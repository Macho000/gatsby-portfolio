module.exports = {
  SiteTitle: 'Macho000',
  Sitelogo: '#',
  SiteLogoText: 'Macho000',
  SiteAuthor: 'Macho000',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/Machoo000',
    github: 'https://github.com/Macho000',
    Qiita: 'https://qiita.com/Macho000',
  },
  SiteContact: {
    email: 'kosukeaigo@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2020',
};
