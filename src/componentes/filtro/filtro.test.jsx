import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filtro from './index.jsx';

import Bebidas from '../../icones/bebidas.svg';
import Bolo from '../../icones/bolo.svg';
import Burguer from '../../icones/burguer.svg';
import Hotdog from '../../icones/hotdog.svg';
import Massas from '../../icones/massas.svg';
import Pizza from '../../icones/pizza.svg';
import Pao from '../../icones/pao.svg';
import Cafe from '../../icones/cafe.svg';
import Frango from '../../icones/frango.svg';

const Imgs = [
    { src: Burguer, nome: 'Burguer', id: 0 },
    { src: Bolo, nome: 'Bolo', id: 1 },
    { src: Hotdog, nome: 'Hot dog', id: 2 },
    { src: Bebidas, nome: 'Bebidas', id: 3 },
    { src: Massas, nome: 'Massas', id: 4 },
    { src: Pizza, nome: 'Pizzas', id: 5 },
    { src: Pao, nome: 'Pães', id: 6 },
    { src: Cafe, nome: 'Café', id: 7 },
    { src: Frango, nome: 'Frangos', id: 8 },
];


describe("Filtro",  () => {
    it("deve renderizar todas as categorias de imagens", () => {
        render(<Filtro setCategoria={() => {}} />);

        Imgs.forEach(imagem => {
            expect(screen.getByAltText(imagem.nome)).toBeInTheDocument();
            expect(screen.getByText(imagem.nome)).toBeInTheDocument();
        });
    });

    it("deve adicionar a classe 'ativo' ao botão clicado", () => {
        render(<Filtro setCategoria={() => {}} />);

        const primeiroBotao = screen.getByAltText(Imgs[0].nome).closest('button');
        fireEvent.click(primeiroBotao);

        expect(primeiroBotao).toHaveClass('ativo');

        Imgs.slice(1).forEach(imagem => {
            const button = screen.getByAltText(imagem.nome).closest('button');
            expect(button).not.toHaveClass('ativo');
        });
    });
})