import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaRegNewspaper, FaTwitter, FaUserSecret, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import BrandCarousel from '../../../Carousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-2'><FaGoogle className='me-2'></FaGoogle>Login with Google</Button>
                <Button variant="outline-dark"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
            </ButtonGroup>
            <div>
                <h6 className='pt-2'>Find Us On</h6>
                <ButtonGroup vertical>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'><FaFacebook className='me-1'></FaFacebook>FaceBook</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'><FaYoutube className='me-1'></FaYoutube>Youtube</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'><FaTwitter className='me-1'></FaTwitter>Twitter</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'><FaWhatsapp className='me-1'></FaWhatsapp>WhatsApp</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'><FaDiscord className='me-1'></FaDiscord> Discord</Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'>
                        <div className='pe-1'>
                            <FaInstagram></FaInstagram>
                        </div>
                        <div>
                            Instagram
                        </div>
                    </Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'>
                        <div className='pe-1'>
                            <FaUserSecret></FaUserSecret>
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                    </Button>
                    <Button variant="outline-secondary" className='mb-2 d-flex flex-row align-items-center'>
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