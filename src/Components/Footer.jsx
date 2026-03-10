import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Footer=()=>{
    return(

            <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-top">
            <div class="footer-brand">
                <h3>Nome da Marca</h3>
                <p>Transformamos ideias em experiências digitais desde 2018.</p>
            </div>

            <div class="footer-links">
                <div class="footer-column">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">História</a></li>
                    <li><a href="#">Carreiras</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                </div>

                <div class="footer-column">
                <h4>Serviços</h4>
                <ul>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Desenvolvimento</a></li>
                    <li><a href="#">SEO & Marketing</a></li>
                    <li><a href="#">Manutenção</a></li>
                </ul>
                </div>

                <div class="footer-column">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
                </div>
            </div>
            </div>

            <div class="footer-bottom">
            <div class="copyright">
                © 2026 Nome da Marca. Todos os direitos reservados.
            </div>

            <div class="social-icons">
                <a href="#" aria-label="Instagram" class="social-link">Instagram</a>
                <a href="#" aria-label="LinkedIn" class="social-link">LinkedIn</a>
                <a href="#" aria-label="GitHub" class="social-link">GitHub</a>
                <a href="#" aria-label="WhatsApp" class="social-link">WhatsApp</a>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer