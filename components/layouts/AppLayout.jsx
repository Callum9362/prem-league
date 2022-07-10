import Navigation from './Navigation'

const AppLayout = ({ header, children }) => {
   
    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation/>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout