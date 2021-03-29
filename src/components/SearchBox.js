import TextField from '@material-ui/core/TextField'

const SearchBox = () => {
  return (
    <div className='pv3'>
      <form>
        <TextField
          label='Search scenarios'
          variant='outlined'
          type='search'
        />
      </form>
    </div>
  )
}

export default SearchBox