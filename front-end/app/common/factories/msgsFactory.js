(function () {
  angular.module('motorcycleBR').factory('msgs', [
    'toastr',
    MsgsFactory
  ])
  function MsgsFactory(toastr) {

    function addMsg(msgs, title, method) {
      //Captures all message
      if(msgs instanceof Array){
        msgs.forEach(msg => toastr[method](msg, title))
      }
      //Captures one message
      else {
        toastr[method](msgs, title)
      }
    }
    /*Show success message method*/
    function addSuccess(msgs) {
      addMsg(msgs, 'Sucesso', 'success')
    }

    /*Show error message method*/
    function addError(msgs) {
      addMsg(msgs, 'Erro', 'error')
    }

    return { addSuccess, addError }
  }
})()
