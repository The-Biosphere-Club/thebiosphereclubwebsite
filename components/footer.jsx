import { Footer } from 'flowbite-react';

function Footerr() {
    return (
        <Footer container className='rounded-none bg-green-300 text-black'>
            <Footer.Copyright href="https://www.instagram.com/biosphere_club_vitcc" by="The Biosphere Club" year={2024} className='text-black'/>
            <Footer.LinkGroup className='text-black'>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/events">Events</Footer.Link>
                <Footer.Link href="/our-team">Our Team</Footer.Link>
                <Footer.Link href="/gallery">Gallery</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}

export default Footerr;