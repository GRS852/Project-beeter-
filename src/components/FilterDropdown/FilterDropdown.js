import './FilterDropdown.css'

import Dropdown from 'react-bootstrap/Dropdown';

function FilterDropdown() {
  return (
    <>
    <div className='filter-button'> 
      <div className='selection-course'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Selecione o curso
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className='selection-category'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Todas as categorias
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    </>
  );
}


export default FilterDropdown;