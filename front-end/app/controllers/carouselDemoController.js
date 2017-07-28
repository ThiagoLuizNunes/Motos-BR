(function() {
  angular.module('motorcycleBR').controller('CarouselDemoCtrl', [
    '$scope',
    CarouselDemoController
  ])

  function CarouselDemoController($scope) {
    const vm = this
    this.myInterval = 3000
    this.noWrapSlides = false;
    this.active = 0;
    this.slides = [
    {
      image: '../../../../assets/imgs/fhoto4.1.jpg',
      text: 'Surpreenda-se com o poder do motor.',
      button: 'COMPARE AS POTÊNCIAS',
      id: 1
    },
    {
      image: '../../../../assets/imgs/fhoto6.1.jpg',
      text: 'Faça da sua vida uma grande aventura.',
      button: 'ENCONTRE SUA MOTO',
      id: 2
    },
    {
      image: '../../../../assets/imgs/fhoto1.1.jpg',
      text: 'Existe um estilo que combina com você.',
      button: 'VÁRIOS ESTILOS',
      id: 3
    }]
}

})()
