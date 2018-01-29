class IntegerTracker {
  constructor(){
    this.ints = []
    this.freqs = {}
    this.mode = null
    this.maxCount = null
    this.max = null
    this.min = null
    this.mean = null
  }

  track(n){
    if(Math.floor(n) === n) {
      this.ints.push(n)
      this.mean = this.ints.reduce((coll, val) => coll + val)/this.ints.length
      // Increment the counter object
      this.freqs[n] = this.freqs[n]? this.freqs[n] + 1 : 1
      // Check if this integer is the new mode
      if(this.freqs[n] > this.maxCount) {
        this.maxCount++
        this.mode = n
      }
      if(n > this.max || this.max === null) this.max = n
      if(n < this.min || this.min === null) this.min = n
    } else {
      throw 'Must provide an integer.'
    }
  }
  get_max(){
    return this.max
  }
  get_min(){
    return this.min
  }
  get_mean(){
    return this.mean
  }
  get_mode(){
    return this.mode
  }

}


module.exports = IntegerTracker
