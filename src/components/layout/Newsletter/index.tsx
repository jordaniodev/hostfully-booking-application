import { Button } from '../../buttons/Button';
import { Input } from './../../form/Input/index';
import newSletterImage from './../../../assets/img/newsletter.svg';
import { Container } from '../Container/Container.style';
import { ContainerTextNewsletter, FormNewsletter, ImageNewSletter, NewsletterCustom, ParagraphNewsletter, SubTitleNewsletter } from './Newsletter.style';

export const Newsletter = () => {
    return <>
        <Container>
            <NewsletterCustom>
                <ContainerTextNewsletter>
                    <SubTitleNewsletter>Subscribe Newsletter</SubTitleNewsletter>
                    <ParagraphNewsletter className='bold'>The Travel</ParagraphNewsletter>
                    <ParagraphNewsletter>Get inspired! Receive travel discounts, tips and behind the scenes stories.</ParagraphNewsletter>
                    <FormNewsletter>
                        <Input name='newsletter' placeholder={'Your email address'} type='text' />
                        <Button type='submit' category='submit'>Subscribe</Button>
                    </FormNewsletter>
                </ContainerTextNewsletter>
                <ImageNewSletter src={newSletterImage} alt=""  />
            </NewsletterCustom>
        </Container>
    </>
}