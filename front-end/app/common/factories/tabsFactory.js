(function () {
  angular.module('motorcycleBR').factory('tabs', [ TabsFactory ])

  function TabsFactory() {
    /*Exibe apenas as tabelas com propriedade TRUE*/
    /*OBJECT DESTRUCTURING*/
    function show(owner, {
      tabList = false,
      tabCreate = false,
      tabUpdate = false,
      tabDelete = false
    }) {
      owner.tabList = tabList
      owner.tabCreate = tabCreate
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
    }
    return { show }
  }
})()
