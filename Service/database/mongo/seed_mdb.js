let save = (properties) => {
  let container = [];
  for (let i = 0; i < properties.length; i ++) {
    let repo = repos[i];
    let doc = new Repo({
      id: repo.id,
      name: repo.name,
      owner: { id: repo.owner.id,
              login: repo.owner.login,
              url: repo.owner.url,
              repos_url: repo.owner.repos_url },
      url: repo.url,
      html_url: repo.html_url,
      description: repo.description
    })
    container.push(doc);
    doc.save((err, request) => {
      if (err) {
        console.log('Error saving doc to database: ', err)
      } else {
        console.log('Successful db save!')
      }
    })
  }