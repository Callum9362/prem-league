import NavLink from './NavLink'
import { useRouter } from 'next/router'

const Navigation = () => {
    const router = useRouter()

    return (
        <nav className="bg-epl-purple border-b border-gray-100">
            {/* Primary Navigation Menu */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Navigation Links */}
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink
                                href="/"
                                active={router.pathname === '/'}>
                                Home
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation