class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  quickFacts() {
    console.log(`${_name} educates ${_numberOfStudents} students at the ${_level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
   let index = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[index];
  }
  
  set numberOfStudents(value) {
    if(value === number){
      return this.value = numberOfStudents;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
}
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'High', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
