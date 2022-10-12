import { render, screen } from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid';

describe('Pruebas en el archivo <GifGrid />', () => {
    
    const category = 'One Punch';

    test ('Debe de mostrar el loading inicialmente', () => {
        render( <GifGrid category={category}/> );
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category ));
    })

    test('Debe de mostrar items, cuando se cargan las imagenes mediante el useFetchGifs', () => {
        
    })
})