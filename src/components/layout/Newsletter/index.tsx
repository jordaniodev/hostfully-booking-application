import { Button } from '../../buttons/Button';
import { Input } from './../../form/Input/index';
import './Newsletter.scss';
import newSletterImage from './../../../assets/img/newsletter.svg';

export const Newsletter = () => {
    return <>
        <div className="container">
            <div className="newsletter">
                <div className="container-text">
                    <h2>Subscribe Newsletter</h2>
                    <p className="bold">The Travel</p>
                    <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                    <form action="">
                        <Input placeholder={'Your email address'} type='text' />
                        <Button type='submit' category='submit'>Subscribe</Button>
                    </form>
                </div>
                <img src={newSletterImage} alt="" className='newSletterImage' />
            </div>
        </div>
    </>
}