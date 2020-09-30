var todo = new Vue({
  el: '.todo',

  data: {
    field: '',
    item: []
  },

  methods: {
    addItem: function() {
      if(!this.field) return 
      
      this.item.unshift(this.field)

      this.field= '';
    },

    removeItem: function(){
      this.item.splice(this.item, 1)
    }
  }
})