import { Route, Routes, Link} from 'react-router-dom'
import './Man.css'

const Kids = () => {
  return (
    <div className='man'>
      <div className='ul'>
        <ul>
            <li><Link to="boys shoes">boys shoes</Link></li>
            <li><Link to="girls shoes">girls shoes</Link></li>
            <li><Link to="boys clithing">boys clithing</Link></li>
            <li><Link to="girls clithing">girls clithing</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="boys shoes" element={<div>boys shoes</div>} />
        <Route path="girls shoes" element={<div>girls shoes</div>} />
        <Route path="boys clithing" element={<div>boys clithing</div>} />
        <Route path="girls clithing" element={<div>girls clithing</div>} />

      </Routes>
    </div>

  )
}

export default Kids