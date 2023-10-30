import profile from '../../images/profile.png';
const Header = () => {
    return (
        <header className='flex items-center justify-between p-5 mx-4 border-b-2'>
            <h1 className='text-3xl font-bold'>Knowlede Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;