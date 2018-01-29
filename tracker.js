class IntegerTracker {
  constructor(){
    this.ints = []
  }
  track(n){
    this.ints.push(n)
  }
  get list(){
    return this.ints
  }
}

module.exports = IntegerTracker
