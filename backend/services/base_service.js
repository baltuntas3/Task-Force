module.exports = class Service {
    async findAll() {
      return this.model.find()
    }
  
    async add(item) {
      return this.model.create(item)
    }
  
    async  del(itemId) {
      return this.model.remove({ _id: itemId })
    }
  
    async find(itemId) {
      return this.model.findById(itemId)
    }
    async findByUserName(username) {
      return this.model.findOne({userName:username})
    }
    async query(object){
      return this.model.find(object)
    }
    
    async update(itemId,set) {
      return this.model.update(itemId,set,{upsert:true})
    }
  }
  