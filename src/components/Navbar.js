import { Stack } from "@mui/system"
import { Link } from "react-router-dom"

import { logo } from "../utils/constants"

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: '0', justiftContent: 'space-between'}}>
      Navbar
    </Stack>
  )
}

export default Navbar
