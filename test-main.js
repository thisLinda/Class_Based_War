const expect = chai.expect;

describe('testing object properties of class Player', () => {
  it('Test should pass if object has playerName property', () => {
      expect(playGame).to.have.property('playerName');
  })
  it('Test should throw an error if the object does not have a playerName', () => {
    expect(function () {
      playGame.playerName;
    }).to.throw(Error);
  });
});
