import { Link } from '@tanstack/react-router';
import { SIDEBAR_ITEMS } from '@/constants';
export function Sidebar() {
  return (
    <aside className='h-screen bg-secondary w-56 px-4 py-[10px]'>
      <nav>
        <ul className='text-gray-100'>
          {SIDEBAR_ITEMS.map((item, index) => (
            <li className='space-y-4' key={`sidebar_item__${index}`}>
              <Link to={item.to}>
                <div className='flex gap-1 items-center'>
                  <item.icon />
                  <p>{item.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
