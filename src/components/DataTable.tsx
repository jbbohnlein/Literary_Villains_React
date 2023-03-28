import React, { useState } from 'react'
import Modal from './Modals/Modal';
import ModalAll from './Modals/ModalAll';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "Key", width: 90, hide: true },
  { field: 'key', headerName: 'Key', flex: 1},
  { field: 'title', headerName: 'Title', flex: 1},
  { field: 'author', headerName: 'Author', flex: 1 },
  { field: 'year', headerName: 'Year', flex: 1},
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const [ opentest, setOpenTest ] = useState(false);
  const { bookData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpenTest = () => {
    setOpenTest(true)
  }

  const handleCloseTest = () => {
    setOpenTest(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 4000)
  }

  return (
    <>
      <Modal 
            open={open}
            onClose={handleClose}
        />
        <ModalAll 
            opentest={opentest}
            onClose={handleCloseTest}
        />

        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white' onClick={() => handleOpenTest()}
                    >
                    Add New Book
                </button>
            </div>
            <button className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" onClick={() => handleOpen()}>Update</button>
            <button className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" onClick={ deleteData }>Delete</button>
        </div>
        <div className={ open || opentest ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}
          >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Bookshelf</h2>
            <DataGrid rows={bookData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>


    </>
  )
}

export default DataTable