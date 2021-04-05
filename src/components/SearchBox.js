import TextField from '@material-ui/core/TextField'

const SearchBox = ({ setSearchText }) => {
  
  return (
    <div className='pv3'>
      <form>
        <TextField
          label='Search scenarios'
          variant='outlined'
          type='search'
          onChange={(e) => {
            console.log(e.target.value)
            setSearchText(e.target.value)
          }}
        />
      </form>
    </div>
  )
}

export default SearchBox