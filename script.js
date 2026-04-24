document.addEventListener("DOMContentLoaded", function() {
    
    // Injetando o Header
    const headerHTML = `
        <header>
            <div class="logo">LUMEN <span>Medical Systems</span></div>
            <nav>
                <a href="#inicio">Início</a>
                <a href="#produtos">Simuladores</a>
                <a href="#contato" class="nav-destaque">Portal do Cliente</a>
            </nav>
        </header>
    `;

    // Injetando o Footer
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <h3>Lumen - Medical Systems</h3>
                <p>Tecnologia em Engenharia Clínica e Simulação Realística.</p>
                <div class="footer-tag">Transformando a manutenção em <b>segurança para o paciente</b>.</div>
                <div class="copyright">&copy; 2026 Lumen Systems - Todos os direitos reservados.</div>
            </div>
        </footer>
    `;

    // Coloca os conteúdos nos placeholders
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});
