function camleCase(str) {
    let newSting = str.split("_");
    if (newSting.length == 1) {
      newSting = str.split("-");
      if (newSting.length == 1) {
        return str;
      }
    }
    for (let i = 0; i < newSting.length; i++) {
      if (i != 0) {
        newSting[i] = newSting[i].charAt(0).toUpperCase() + newSting[i].slice(1);
      }
    }
    return newSting.join("")
  }

  console.log(camleCase("hello_darkness-my_old-friend"))