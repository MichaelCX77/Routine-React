import Button from '../components/buttons/Button'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import DateBar from '../components/DateBar'
import Conteudo from '../components/Conteudo'
import Main from '../components/Main'

export default function Home(){
    return (
        <div className='w-screen'>
            <NavBar title="Routine React"/>
            <div className='flex justify-end mx-6 my-4'>
                <Button text="Planejar"/>
            </div>
            <Main title="Minha Joana">
                <Conteudo>
                    <DateBar date="14 de Fevereiro - 2022"/>
                    <Table />
                </Conteudo>
            </Main>
        </div>
    )
}