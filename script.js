// Script interativo para marcar os itens do menu como ativos durante o scroll da página
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    
    // Seleciona todas as seções e o banner inicial
    document.querySelectorAll('section, .hero').forEach((el) => {
        // Se a distância do scroll passar do topo da seção (com uma folga de 120px)
        if (el.offsetTop - 120 <= scrollDistance) {
            // Remove a classe active de todos os links
            document.querySelectorAll('nav ul li a').forEach((navLink) => {
                navLink.classList.remove('active');
            });
            
            // Adiciona a classe active apenas no link correspondente à seção visível
            const id = el.getAttribute('id');
            const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});
