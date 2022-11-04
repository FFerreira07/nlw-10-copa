let delay = -0.4;
function creatCard(date, day, game){
  delay+= 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${game}
    </ul>
  </div>
  `
}
function creatGame(player1, hour, player2){
  return`
    <li>
      <img src="./assets/icon/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}
document.querySelector('#cards').innerHTML =
 
    creatCard('24/11', 'QUINTA', creatGame("brazil","16:00","serbia") + creatGame("portugal","13:00","ghana") + creatGame("uruguay","10:00","southKorea"))
    +
    creatCard('28/11', 'SEGUNDA', creatGame("brazil","13:00","switzerland") + creatGame("portugal","16:00","uruguay") + creatGame("cameroon","07:00","serbia"))
    


