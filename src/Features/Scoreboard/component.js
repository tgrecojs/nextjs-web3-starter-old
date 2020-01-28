const Scoreboard = ({ score, player = 'default player' }) => (
  <div>
    <h4>Pushup scoreboard!</h4>
    <p>
      Current Count: {score} | Player {player}
    </p>
  </div>
);

export default Scoreboard;
