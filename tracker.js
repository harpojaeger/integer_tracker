class IntegerTracker {
  constructor(){
    this.ints = []
    this.freqs = {}
    this.mode = null
    this.maxCount = null
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
    } else {
      throw 'Must provide an integer.'
    }
  }
  get_max(){
    return Math.max(...this.ints)
  }
  get_min(){
    return Math.min(...this.ints)
  }
  get_mean(){
    return this.mean
  }
  get_mode(){
    return this.mode
  }

}


module.exports = IntegerTracker
