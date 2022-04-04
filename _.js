const _ = {

    clamp (number, lower, upper) {
      const lowerClampedValue =
     Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
    },
      
    inRange (number, start, end) {
     if (end === undefined) {
     end = start;
     start = 0
     }
     if (start > end) {
        const temp = end; 
        end = start;
        start = temp
      }
      const isInRange =
      (number >= start && number < end) 
     return isInRange
    },  
    words (string) {
      const words = string.split(' ')
      return words
    },
    pad (string, length) {
      if (length < string.length) {
        return string
      }
      const startPaddingLength = Math.floor((length - string.length)/2)
      const endPaddingLength = (length - string.length - startPaddingLength)
      const paddedString = ' ' .repeat(startPaddingLength) + string + ' ' .repeat(endPaddingLength)
      return paddedString
    },
    has (object, key) {
      var hasValue = object[key];
      if (hasValue !== undefined) {
        return true
      }
    else {
      return false
    }
    },
    invert (object) {
      let invertedObject = {}
      for (let key in object) {
        let originalValue = object[key]
      invertedObject = {originalValue: key}
      }
      return invertedObject;
    },
    findKey (object, predicate) {
      for (let key in object) {
        let value = object[key]
            if (predicate(object[key])) {
              return key
            } 
      } 
    },
    drop (array, number) {
        if (number === undefined) {
          let number = 1
          return array.slice(number, array.length)
        }
        let dropArray = array.slice(number, array.length)
        return dropArray
      },
    dropWhile (array, predicate) {
      const callback = (element, index) => {
      return !predicate(element, index, array) }
      let dropNumber = array.findIndex(callback);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray
    },
    chunk (array, size) {
      if (size === undefined) {
        let size = 1
      }
      let arrayChunks = [];
      for (let i = 0; i<array.length; i+ size) {
      let arrayChunk = array.slice(i, i+= size);
          arrayChunks.push(arrayChunk)
      } return arrayChunks;
    }
    }
    
    module.exports = _;