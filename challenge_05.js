const getDatabase = async () => {
   let url = 'https://codember.dev/data/database_attacked.txt'
   const response = await fetch(url)
   const db = await response.text()
   return db
}

(async () => {
   let invalidos = []
   let db = await getDatabase()
   let entries = db.split('\n')
   entries.forEach(el => {
      let [id, username, email, age, location] = el.split(',')

      let validacionId = /^[a-zA-Z0-9]+$/g.test(id)
      let validacionUsername = /[a-zA-Z0-9]/g.test(username)
      let validacionEmail = /[a-zA-Z0-9._-]+@+[a-zA-Z0-9.-]+\.[com]/g.test(email)
      let validacionAge = /[0-9]/g.test(age)
      let validacionLocation = /[a-zA-Z]/g.test(location)
      

      if ((validacionId === false) || (username === '' || !validacionUsername) || (email === '' || !validacionEmail) || !validacionAge || !validacionLocation)
      {
         invalidos.push(username[0])
         console.log(username)
      }
   })
   console.log(invalidos.join(''))

}
)()