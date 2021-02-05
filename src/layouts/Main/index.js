import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import NavbarMobile from 'components/NavbarMobile'
import PagesLayout from 'layouts/Pages'
import { MainLayoutStyled } from './styled'
const { Grid } = MainLayoutStyled

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <Grid>
        <Sidebar />
        <PagesLayout>
          {children}
        </PagesLayout>
      </Grid>

      <NavbarMobile />
    </>
  )
}

export default MainLayout
