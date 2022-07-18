import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className="inline-flex text-white items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out" 
            >
            {children}
        </a>
    </Link>
)

export default NavLink