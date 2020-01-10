export default function() {

  this.get('/movies',(schema) => {
      return schema.movies.all()
  })

  this.get('characters',(schema)=>{
    return schema.characters.all()

  })

  this.get('/movies/:id',(schema, request)=>{
    var id = request.params.id;
    console.log(schema.movies.find(id))
    return schema.movies.find(id)
  })

  this.get('/characters/:id',(schema, request)=>{
    var id = request.params.id;
    console.log(schema.characters.find(id))
    return schema.characters.find(id)
  })

}
