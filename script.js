document.addEventListener("DOMContentLoaded", function() {
    
    // Código do Cabeçalho que se repetirá em todas as páginas
    const headerHTML = `
        <header>
            <div class="logo">LUMEN <span class="divider">|</span> <span class="sub">Medical Systems</span></div>
            <nav>
                <a href="index.html">Início</a>
                <a href="#produtos">Equipamentos</a>
                <a href="#contato" class="btn-portal">Portal do Cliente</a>
            </nav>
        </header>
    `;

    // Código do Rodapé que se repetirá em todas as páginas
    const footerHTML = `
        <footer>
            <div class="footer-grid">
                <div class="footer-info">
                    <h3>LUMEN</h3>
                    <p>Referência em simuladores para Engenharia Clínica.</p>
                </div>
                <div class="footer-cta">
                    <p>Tecnologia que garante <b>precisão absoluta</b>.</p>
                </div>
            </div>
            <div class="copyright">&copy; 2026 Lumen Medical Systems - Padrão de Excelência Hospitalar</div>
        </footer>
    `;

    // Busca os espaços reservados no HTML e injeta o código
    const headerContainer = document.getElementById('header-placeholder');
    const footerContainer = document.getElementById('footer-placeholder');

    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
