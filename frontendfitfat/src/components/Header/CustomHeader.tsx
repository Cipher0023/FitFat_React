export default function CustomHeader() {
  return (
    <div className="bg-white shadow-sm flex">
      <a href="#" className="container mx-auto px-4 py-4">
        <h1 className="text-black text-2xl font-bold">link main page</h1>
      </a>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">Hambuerger</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Settings</a></li>
        <li><a href="/login">Log in</a></li>
        </ul>
      </div>
      <div>
        <a className="text-black text-2xl font-bold">logo</a>
      </div>
    </div>
  )
}