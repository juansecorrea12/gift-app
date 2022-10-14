import { useFetchGif } from "../../../src/hooks/useFetchGif"
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en el archivo useFetchGif', () => {
    
    test('Debe de regresar el estado inicial', () => {

        const {result} = renderHook(() => useFetchGif('One Punch'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })

    test('Debe de retornar un arreglo de imagenes y el isLoading en False', async() => {

        const {result} = renderHook(() => useFetchGif('One Punch'));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
})