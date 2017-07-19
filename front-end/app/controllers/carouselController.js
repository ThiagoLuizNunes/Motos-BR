(function() {
  angular.module('motorcycleBR').controller('CarouselCtrl', [
    '$scope',
    CarouselController
  ])

  function CarouselController($scope) {
    const vm = this
    this.slides = [
    {
      image: '../../../../assets/imgs/fhoto4.1.jpg',
      text: 'Surpreenda-se com o poder do motor.',
      button: 'COMPARE AS POTÊNCIAS'
    },
    {
      image: '../../../../assets/imgs/fhoto6.1.jpg',
      text: 'Faça da sua vida uma grande aventura.',
      button: 'ENCONTRE SUA MOTO'
    },
    {
      image: '../../../../assets/imgs/fhoto1.1.jpg',
      text: 'Existe um estilo que combina com você.',
      button: 'VÁRIOS ESTILOS'
    }]
  }

})()
