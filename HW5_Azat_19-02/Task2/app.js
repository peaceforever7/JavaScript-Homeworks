var Names = [ "evgenii","vadim","EKATERINA","SoFya","mARIA","svetlana","alexey"]
  
console.log (Names.map(function(Name){
    return Name[0].toUpperCase() + Name.substring(1).toLowerCase()
  }
  ))
