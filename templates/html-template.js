//create Engineer 
  const generateEngineer = (engineer) => {
    return ` 
    <div class="card col-8 col-md-5 col-lg-4 col-xl-3 m-3 shadow">
<div class="card-header bg-light text-dark">
  <h2> ${engineer.name} </h2>
  <h3> ~ Engineer</h3>
</div>
<ul class="list-group my-5 mx-4 bg-dark">
  <li class="list-group-item">ID: ${engineer.id} </li>
  <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
  <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
</ul>
</div>
    `;
  };
  const generateManager = (manager) => {
    return ` 
    <div class="card col-8 col-md-5 col-lg-4 col-xl-3 m-3 shadow">
<div class="card-header bg-info text-white">
  <h2> ${manager.name} </h2>
  <h3>  ~ Team Manager</h3>
</div>
<ul class="list-group my-5 mx-4 bg-dark">
  <li class="list-group-item">ID: ${manager.id} </li>
  <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
  <li class="list-group-item"><Address>${manager.address}</Address></li>
</ul>
</div>
    `;
  };

  const generateIntern = (intern) => {
    return ` 
    <div class="card col-8 col-md-5 col-lg-4 col-xl-3 m-3 shadow">
<div class="card-header bg-light text-dark">
  <h2> ${intern.name} </h2>
  <h3> ~ Intern </h3>
</div>
<ul class="list-group my-5 mx-4 bg-dark">
  <li class="list-group-item">ID:${intern.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
  <li class="list-group-item">University: ${intern.University} </li>
</ul>
</div>
    `;
  };
  
  const generateTeam = (data) => {
    let teamCard = [];
  
    for (let i = 0; i < data.length; i++) {
      let role = data[i].getRole();
  
      if (role === "Manager") {
        const managerCard = generateManager(data[i]);
        teamCard.push(managerCard);
      }
  
      if (role === "Engineer") {
        const engineerCard = generateEngineer(data[i]);
        teamCard.push(engineerCard);
      }
  
      if (role === "Intern") {
        const internCard = generateIntern(data[i]);
        teamCard.push(internCard);
      }
    }
  
    const teamCardInfo = teamCard.join("");
  
    const generatePage = generateHTML(teamCardInfo);
    return generatePage;
  };
  
  const generateHTML = (teamCardInfo) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <title>Team Profile</title>
    </head>
    <body>
    <header class="jumbotron bg-info">
      <h1 class="text-white text-center p-4"> My Team </h1>
    </header>
      <section class="container">
        <div class="row g-0 d-flex justify-content-center p-5">
         ${teamCardInfo}
        </div>
      </section>
    </body>
  </html>
    `;
  };
  
  module.exports = generateTeam;