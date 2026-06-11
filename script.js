// Seleciona todos os elementos com a classe 'momento'
const momentos = document.querySelectorAll('.momento');

// Configuração do "observador" da tela
const observerOptions = {
    root: null, // usa a janela do navegador como referência
    rootMargin: '0px',
    threshold: 0.2 // dispara a animação quando 20% do elemento estiver visível
};

// Cria o observador
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Se o elemento entrou na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe que faz aparecer
            
            // Opcional: parar de observar depois que apareceu uma vez (melhora performance)
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Manda o observador vigiar cada momento
momentos.forEach(momento => {
    observer.observe(momento);
});