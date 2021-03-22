var root = new Vue({
    el: '#root',
    data: {
      todo: '',
      title: "Boolean",
      newarray: [
          'pippo',
          'pluto',
          'paperino'
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

