if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
      });

    new SimpleSlide({
        slide: 'portfolio',
        time: 5000,
        nav: true
    });
} 

