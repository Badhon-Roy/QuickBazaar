import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="border-t-2 border-[#333c49] ">
            <footer className="footer p-10 max-w-[1400px] mx-auto px-8 md:py-8">
                <aside>
                    <a >
                        <Link to={'/'}>
                            <img className="w-[80px] object-contain" src="https://i.ibb.co/b6828Lq/Colorful-Illustrative-Online-Shop-Logo-5.png" alt="" /></Link>
                    </a>
                    <p>QuickBazaar Ltd.<br />Providing reliable tech since 2018</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-gray-600 text-white">
                <aside>
                    <p>Copyright &copy; 2024 - All right reserved by Quick Bazaar</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;