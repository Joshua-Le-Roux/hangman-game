
//async function component for grabbing a random word
 async function Word () {
    try {
    const api = await fetch("https://random-word-api.vercel.app/api?words=1")
    //converting from text to obj
    const result = await api.json()
    //returning the word
    return result[0]
  }
    catch (error) {
        console.log(error)
    }
  };
  //calling the Word component and returning the call inside the variable
  let Api = Word()

  //exporting the returned word
export default Api
