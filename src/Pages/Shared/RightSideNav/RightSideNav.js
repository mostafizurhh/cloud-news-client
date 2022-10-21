import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaRegNewspaper, FaTwitter, FaUserSecret, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import BrandCarousel from '../../../Carousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
    /* get context */
    const { providerLogin } = useContext(AuthContext);

    /* create provider */
    const googleProvider = new GoogleAuthProvider();

    /* button onClick function */
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignin} variant="outline-primary" className='mb-2 d-flex flex-row align-items-center' size="sm"><FaGoogle className='me-2'></FaGoogle><small className='ps-2 pe-1'>Login with Google</small></Button>
                    <Button variant="outline-dark" className='mb-2 d-flex flex-row align-items-center' size="sm"><FaGithub className='me-2'></FaGithub><small className='ps-2 pe-1'>Login with Github</small></Button>
                </ButtonGroup>
            </div>
            <div>
                <h6 className='pt-2'>Find Us On</h6>
                <ButtonGroup vertical>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm"><FaFacebook className='me-1'></FaFacebook>FaceBook</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm"><FaYoutube className='me-1'></FaYoutube>Youtube</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm"><FaTwitter className='me-1'></FaTwitter>Twitter</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm"><FaWhatsapp className='me-1'></FaWhatsapp>WhatsApp</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm"><FaDiscord className='me-1'></FaDiscord> Discord</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm">
                        <div className='pe-1'>
                            <FaInstagram></FaInstagram>
                        </div>
                        <div>
                            Instagram
                        </div>
                    </Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm">
                        <div className='pe-1'>
                            <FaUserSecret></FaUserSecret>
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                    </Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center' size="sm">
                        <div className='pe-1'>
                            <FaRegNewspaper></FaRegNewspaper>
                        </div>
                        <div> Terms & Conditions</div>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;