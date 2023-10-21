import { useState } from 'react'
import { BaiTapThucHanhLayout } from './BaiTapThucHanhLayout/BaiTapThucHanhLayout'
BaiTapThucHanhLayout

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BaiTapThucHanhLayout/>
    </div>
  )
}

export default App
