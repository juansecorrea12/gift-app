import { render, screen } from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid';
import { useFetchGif } from '../../src/hooks/useFetchGif';

jest.mock('../../src/hooks/useFetchGif');

describe('Pruebas en el archivo <GifGrid />', () => {
    
    const category = 'One Punch';

    test ('Debe de mostrar el loading inicialmente', () => {
        useFetchGif.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={category}/> );
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category ));
    })

    test('Debe de mostrar items, cuando se cargan las imagenes mediante el useFetchGifs', () => {
        
        const gifs = [
            {
                id:'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id:'CDE',
                title: 'Vegeta',
                url: 'http://localhost/vegeta.jpg'
            }
        ];

        useFetchGif.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category}/> );

        expect(screen.getAllByRole('img').length).toBe(2);
    })
})