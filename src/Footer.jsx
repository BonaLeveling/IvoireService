import './App.css'


function Footer () {
    return (
        <div className='text-black/60 border-t border-black/20 py-4 px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-center mt-8 text-sm'>
          <p>
            © 2026 IvoireService. Tous droits reservés
          </p>
          <ul className='flex gap-4'>
            <a href="#">X</a>
            <a href="#">Linkdiln</a>
            <a href="#">Instagram</a>
          </ul>
        </div>
    )
}
export default Footer