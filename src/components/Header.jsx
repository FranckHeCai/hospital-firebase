const Header = () => {
  return (
    <div className="fixed top-0 w-full">
      <ul className="flex justify-center bg-blue-500 text-white">
        <li><a className="p-5 block hover:bg-blue-600" href="/">Read</a></li>
        <li><a className="p-5 block hover:bg-blue-600" href="/create">Create</a></li>
      </ul>
    </div>
  );
};

export default Header;