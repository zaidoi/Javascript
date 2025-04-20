function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  }
  function createPlayer (name, level) {
    const user = createUser(name);
  
    const increaseLevel = () => level++;
    return Object.assign({}, user, { increaseLevel });
  }
  
  