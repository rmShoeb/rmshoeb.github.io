import { PortfolioRenderer } from "./components/portfolioRenderer/portfolioRenderer.component";

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new PortfolioRenderer();
    const app = document.querySelector<HTMLDivElement>('#app')!;
    app.innerHTML = portfolio.initialize();
});