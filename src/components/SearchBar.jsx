import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SearchBar({ 
    selected,
    level,
    searchTerm,
    setSearchTerm,
    setLevel,
   setSelected,
        tab,
    
 }){
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
   return (
    <Box sx={{ display: 'flex',alignItems:'center' }}>
        <Paper
          component="form"
          sx={{display: 'flex', alignItems: 'center', width: 400, height:'100%' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search "
            inputProps={{ 'aria-label': 'search google maps' }}
            value={searchTerm}
            onChange={handleSearchChange}
            size="small"
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        {tab === 'pending' && (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Trigger Reason</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selected}
              onChange={handleChange}
            >
              <MenuItem value="All">
              Trigger Reason
              </MenuItem>
              <MenuItem value='IPChange'>IPChange</MenuItem>
               <MenuItem value='FIFO'>FIFO</MenuItem>
            </Select>
          </FormControl>
        )}
        {tab === 'completed' && (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Trigger Reason</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selected}
              onChange={handleChange}
            >
              <MenuItem value="All">
                 Action Reason
               </MenuItem>
             <MenuItem value="Closed">Closed</MenuItem>
               <MenuItem value="Cleared">Cleared</MenuItem>
              <MenuItem value="SOIrequested">SOIrequested</MenuItem>
              <MenuItem value="Flagged">Flagged</MenuItem>
             
            </Select>
          </FormControl>
        )}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Risk level</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={level}
            label="Risk Level"
            onChange={handleLevelChange}
          >
            <MenuItem value="All">
                RiskLevel
             </MenuItem>
              <MenuItem value='high'>High</MenuItem>
              <MenuItem value='low'>Low</MenuItem>
              <MenuItem value='medium'>Medium</MenuItem>
           
          </Select>
        </FormControl>
      </Box>
   )
}