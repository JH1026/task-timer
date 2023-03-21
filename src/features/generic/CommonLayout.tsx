import { Outlet } from "react-router-dom"

const CommonLayout = () => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '1024px',
      flexDirection: 'column',
    }}>
      <div style={{
        width: '1024px',
        background: '#11a',
        minHeight: '100vh',
        flexGrow: 1,     
      }}>
        <Outlet />
      </div>
    </div>
  )
};

export default CommonLayout;
