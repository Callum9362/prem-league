import NavLink from './NavLink'
import Dropdown from './Dropdown'
import { DropdownButton } from './DropdownLink'
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
                            
                            {/* Premier League Dropdown */}
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                        <button className="inline-flex text-white items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
                                            Premier League
                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }
                                    >
                                    <DropdownButton>
                                        Home
                                    </DropdownButton>
                                    <DropdownButton>
                                        Fixtures
                                    </DropdownButton>
                                    <DropdownButton>
                                        Results
                                    </DropdownButton>
                                    <DropdownButton>
                                        Tables
                                    </DropdownButton>
                                    <DropdownButton>
                                        Awards
                                    </DropdownButton>
                                    <DropdownButton>
                                        Hall of Fame
                                    </DropdownButton>
                                    <DropdownButton>
                                       Transfers
                                    </DropdownButton>
                                    <DropdownButton>
                                       Broadcast
                                    </DropdownButton>
                                    <DropdownButton>
                                       Tickets
                                    </DropdownButton>
                                    <DropdownButton>
                                       Clubs
                                    </DropdownButton>
                                    <DropdownButton>
                                       Players
                                    </DropdownButton>
                                </Dropdown>
                            </div>
                        
                            {/* Fantasy Dropdown */}
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                        <button className="inline-flex text-white items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
                                            Fantasy
                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }>
                                </Dropdown>
                            </div>
                            

                            <NavLink
                                href="/"
                                active={router.pathname === '/'}
                            >
                                Video
                            </NavLink>

                            {/* Communities Dropdown */}
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                        <button className="inline-flex text-white items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
                                            Communities
                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }>
                                </Dropdown>
                            </div>

                            {/* More Dropdown */}
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                        <button className="inline-flex text-white items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out">
                                            Communities
                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }>
                                </Dropdown>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation