import {render, screen} from '@testing-library/react';
import {GifGridItem} from '../../src/components/GifGridItem';

describe('Pruebas en el componente <GifGridItem />', () => {
    
    const title = 'vegeta';
    const url = 'https://vegeta-sayayin-gif.com/sayanVegeta.jpg';

    test('Debe de hacer match con el snapshot', () => {
        
        const {container} = render( <GifGridItem title = {title} url={url}/>);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el URL indicado y el ALT indicado', () => {
        
        render( <GifGridItem title = {title} url={url}/>);
        // screen.debug();
        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
        expect(typeof src).toEqual("string");

    })

    test('Debe de mostrar el titulo en el componente <GifGridItem />', () => {
        render( <GifGridItem title = {title} url={url}/>);

        expect(screen.getByText( title )).toBeTruthy();


    })

})
