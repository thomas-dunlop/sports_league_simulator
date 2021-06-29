//Initialize some global variables 
let leagueTeams = [];

//Factory Function for creating sports teams
function createTeam(name, skill) {
    return{
        name: name,
        skill: skill,
    };
}

//Function for adding teams to the league
function addTeam(name, skill){
    let tempTeam = createTeam(name, skill);
    leagueTeams.push(tempTeam);
}

//Function for simulating a game
function simulateGame() {
    // Assigns team1 and team2, ensuring that team1 !== team2. 
    let team1 = leagueTeams[Math.floor(Math.random() * leagueTeams.length)];
    do {
        team2 = leagueTeams[Math.floor(Math.random() * leagueTeams.length)];  
    } while (team1 === team2);

    // Determines which team is advantaged and assignes roles accordingly.
    let advTeam; 
    let disTeam;
    if (team1.skill > team2.skill){
        advTeam = team1;
        disTeam = team2;
    } else {
        advTeam = team2;
        disTeam = team1
    }

    // Calculates winner
    let skillSum = advTeam.skill + disTeam.skill;
    let skillSet = disTeam.skill/skillSum * 100;
    let matchValue = Math.floor(Math.random() * skillSum)/skillSum * 100;
    
    // Calculate score
    let disScore = Math.floor(Math.random() * 20);
    let advScore = Math.floor(Math.random()*10) + disScore + 1;

    // Display message
    if (matchValue >= skillSet) {
        console.log(`The ${advTeam.name} beat the ${disTeam.name}, ${advScore} to ${disScore}, as expected.`);
    } else {
        console.log(`The ${disTeam.name} beat the ${advTeam.name}, ${advScore} to ${disScore}, in a stunning upset!`)
    }

}

//Adds 5 teams to the league
addTeam('Milton Mammals', 5);
addTeam('High River House Pets', 10);
addTeam('Red Deer Rabbits', 2);
addTeam('Toronto Terriers', 1);
addTeam('Canmore Canines',6);

//Simulates 5 games;
simulateGame();
simulateGame();
simulateGame();
simulateGame();
simulateGame();
