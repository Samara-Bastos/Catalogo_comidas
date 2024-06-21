import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BotaoPedido from './index.jsx';

describe("BotaoPedido",  () => {
    it(" Verifica se o botão está na tela", () => {
        render(<BotaoPedido />);

        const buttonElement = screen.getByRole('button', { name: /faça seu pedido/i });
        expect(buttonElement).toBeInTheDocument();
    })

    it("Verifica se o link está presente e com o href correto", () => {
        render(<BotaoPedido />);

        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', 'https://www.ifood.com.br/');
        expect(linkElement).toHaveAttribute('target', '_blank');
    })

})