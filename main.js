new Vue({
  el: "#app",
  data: () => ({
    valueTask: '',
    tasksList: [
      { name: 'Read more about Vue', done: false },
      { name: 'Buy food', done: true }
    ]
  }),
  computed: {
    taskClass() {
      return {
        'task': true,
        'border-task': this.tasksList.length > 1
      }
    }
  },
  methods: {
    onSubmitForm() {
      if (this.valueTask) {
        this.tasksList.push({ name: this.valueTask, done: false })
        this.valueTask = ''
      }
    },
    onRemoveTask(indexTask) {
      this.tasksList.splice(indexTask, 1)
    }
  }
});
