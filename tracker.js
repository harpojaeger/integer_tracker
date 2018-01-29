// get_max() - Returns the max (int) of all integers seen so far.
// get_min() - Returns the min (int) of all integers seen so far.
// get_mean() - Returns the mean (float) of all integers seen so far.
// get_mode() - Returns the mode (most frequent) (int) of all integers seen so far.


class IntegerTracker {
  constructor(){
    this.ints = []
    this.freqs = {}
    this.calc = null
  }

  // Track is 3*O(n).
  track(n){
    if(Math.floor(n) === n) {
      this.ints.push(n)
      this.mean = this.ints.reduce((coll, val) => coll + val)/this.ints.length

      let freqs = {}
      this.ints.forEach(n => {
        freqs[n] = freqs[n] ? freqs[n] + 1 : 1
      })
      let mode = null
      let maxCount = null
      // It would be more efficient to combine this with the forEach above
      Object.entries(freqs).forEach(entry => {
        if(entry[1] > maxCount){
          maxCount = entry[1]
          mode = entry[0]
        }
      })
      this.mode = parseInt(mode,10)

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
