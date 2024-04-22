import { screen } from '@testing-library/react';

import Post from '..';
import { renderComments } from '../../utils/test';

describe('Teste para o post', () => {
    test('deve carregar dois posts', () => {
        renderComments(
        <>
        <Post imageUrl='https://cdn.pixabay.com/photo/2018/06/22/08/24/emotions-3490223_1280.jpg'>Olha que paisagem maravilhosa</Post>
        <Post imageUrl='https://cdn.pixabay.com/photo/2020/02/17/09/36/painter-4856002_1280.jpg'>Pinte a casa de amarelo</Post>
        </>
        )
        expect(screen.queryAllByTestId('post')).toHaveLength(2)
    })
})