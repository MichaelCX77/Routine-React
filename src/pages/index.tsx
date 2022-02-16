import Button from '../components/Button'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import DateBar from '../components/DateBar'

export default function Home(){
    return (
            <div className='w-screen'>
                <NavBar title="Routine React"/>
                <div className='flex justify-end mx-6 my-4'>
                    <Button text="Planejar"/>
                </div>
                <div className='w-full  pl-36 mt-6'>
                    <h1 className='text-4xl mb-10'>Minha Rotina</h1>
                    <div className='flex flex-col w-7/12 max-h-80'>
                        <div className='mb-6'>
                            <DateBar date="14 de Fevereiro - 2022"/>
                        </div>
                        
                        <Table />
                    </div>
                </div>
            </div>
        )
}