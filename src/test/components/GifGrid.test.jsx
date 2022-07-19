import { render , screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";

jest.mock("../../hooks/useFetchGif")

describe ('Test en <GifGrid/>', () => {

    const category = 'Going...';

    test('Debe mostrar inicialmente el loading', () => {

        useFetchGif.mockReturnValue({
            imagenes:[],
            loading: true
        })

        render( <GifGrid category={category}/> )

        expect ( screen.getByText('Going...').innerHTML ).toBe('Going...');
        expect ( screen.getByText(category).innerHTML ).toBe(category);

    });

    test('Debe mostrar items, cuando se cargan las imagenes en useFectGids', () => {

        useFetchGif.mockReturnValue({
            imagenes:[
                {id:'ABC123', title:'Saitama', url:'https://onepunch/saitama.jpg'},
                {id:'ABC333', title:'Garou', url:'https://onepunch/garou.jpg'},
            ],
            loading:false
        })

        render( <GifGrid category={category}/> )

        expect(screen.getAllByRole('img').length).toBe(2)

    });
})





/* 
describe ('Test en <GifGrid />', ()=> {

const category = 'One Punch';

test ('Debe mostrar inicialmente el loading', ()=> {

useFetchGif.mockReturnValue ({

imagenes:[],
losding:true

})

render(<GifGrid category={category}/>)

expect(screen.getByText('Cargando...').innerHTML).toBe('Cargando...');

expect(screen.getByText(category).innerHTML).toBe(category);
})


test('Debe mostrar items cuando carga las imagenes en usefethGifs', ()=>{  

useFetchGif.mockReturnValue ({
    imagenes:[

        {id:'ABC123', title: 'Saitama ', url:''},
        {id:'ABC123', title: 'Saitama ', url:''}
    ],
    loading: false,
}); */
/* 
render(<GifGrid category={category}/>)
expect (screen.getAllByRole('img').length).toBe (2)
 *//* 
});




}); */
