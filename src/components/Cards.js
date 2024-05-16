import React from 'react';
import '../Cards.css';
import CardsData from './CardsData';


const CardComponent = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

const CardsContainer = () => {
  const cardData = [
    {
      title: 'Plan 1',
      description: '60 GB .',
      image: 'https://scontent-bog2-1.xx.fbcdn.net/v/t1.6435-9/205998029_10159569092310891_6092974772789790014_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IJ_Dhxg7J1sQ7kNvgFckl1X&_nc_ht=scontent-bog2-1.xx&oh=00_AYDKSQxfx7y-U1jivqY4wJwde8dDbc_VIMjKcS1nCdChHA&oe=666CE232',
      link: '#'
    },
    {
      title: 'Plan 2',
      description: '120 GB .',
      image: 'https://scontent-bog2-1.xx.fbcdn.net/v/t1.6435-9/115747865_10158715217880891_1578013689862783509_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3SsvEQeRquAQ7kNvgHUs8zC&_nc_ht=scontent-bog2-1.xx&oh=00_AYCkz0RMwtMZFyZHg9spMxt8LrMgjNLgHP14x2PIhsdRxQ&oe=666CC16A',
      link: '#'
    },
    {
      title: 'Plan 3',
      description: '240 GB .',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Movistar_isotype_2020.svg/800px-Movistar_isotype_2020.svg.png',
      link: '#'
    },
    {
      title: 'Plan 4',
      description: '480 GB .',
      image: 'https://i.pinimg.com/564x/9e/d9/c2/9ed9c24e6af04a9f2a174cf2739fe06b.jpg',
      link: '#'
    }
  ];

/*   return (
    <div className="Cards">
      <img src="https://i.pinimg.com/564x/6e/fd/cb/6efdcb357688eb417adc660408c9f5a2.jpg"></img>
      <CardsData
      title="juan Jose" 
      descripcion="hey i am using Whatsapp"
      image='https://i.pinimg.com/564x/9e/d9/c2/9ed9c24e6af04a9f2a174cf2739fe06b.jpg'
      link='#'/>
    </div>
  ); */

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-md-2 mb-4" key={index}>
          <CardComponent
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
