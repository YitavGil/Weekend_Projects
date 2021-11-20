function longestString(str1, str2) {
    return (str1 + str2).split('').filter(onlyUnique).sort().join('')
  }
  
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

  console.log(longestString("wannawholelottastring", "wololololowing"))