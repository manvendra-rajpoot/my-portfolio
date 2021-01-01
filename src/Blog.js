import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css';

function Blog() {
    return (
        <div class='myblogs'>
            <h1>My Blogs 📝</h1>
            <div className='blogList'>
            <div className='blog'>
            <Card className='card__info'>
            <Card.Img className='card__img' variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--iM1hXlK9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/dh1vnd122ol2nn9ofjdi.png" />
            <Card.Body>
            <Card.Link className='card__link' href="https://dev.to/manvendrajpoot/don-t-be-scared-get-started-with-open-source-as-soon-as-possible-1g7b">Don't be scared, get started with Open Source as soon as possible.</Card.Link>
            </Card.Body>
            </Card>
            </div>
            <div className='blog'>
            <Card className='card__info'>
            <Card.Img className='card__img' variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ohJpBDmS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1ds1t7zv86vt79g9r15j.jpg" />
            <Card.Body>
            <Card.Link className='card__link' href="https://dev.to/manvendrajpoot/resolved-error-enospc-system-limit-for-number-of-file-watchers-reached-edk">Resolved! Error- ENOSPC: System limit for number of file watchers reached.</Card.Link>
            </Card.Body>
            </Card>
            </div>
            
            </div>
        </div>
    )
}

export default Blog;
