var root = new Vue({
    el: '#root',
    data: {
      todo: '',
      newarray: [
          'Fare i compiti',
          'Fare la spesa',
          'Fare il bucato'
      ]
    },
    methods: {
        addToDo(){
            this.newarray.push(this.todo);
            this.todo= '';
            console.log(this.newarray);
        }
    }
})

