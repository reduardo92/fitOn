import styled from 'styled-components';
import TitleBanner from '../titleBanner';
import services from './servicesData';

const Stlyed = styled.section`
  position: relative;
  background: url(bars.jpg);
  background-size: cover;
  background-position: left;
  object-fit: cover;
  min-height: 100vh;
  padding: 5em 2em;
  z-index: 1;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.heroOpacity || 'rgba(0, 0, 0, 0.65)'};
    z-index: -1;
  }

  .card--container {
    margin-top: 3em;
  }
`;

const Services = () => {
  return (
    <Stlyed>
      <TitleBanner title='Services' subtitle='STEP UP YOUR FITNESS' invert />
      <div className='card--container'>
        {services.map(
          ({ id, title, subtitle, img }, i) =>
            i <= 2 && (
              <div key={id} className='card'>
                <div className='card--img'>
                  <img src={img} alt={title} />
                </div>
                <div className='card--body'>
                  <h3 className='card--body__title'>{title}</h3>
                  <div className='card--body__para'>{subtitle}</div>
                </div>
              </div>
            )
        )}
      </div>
    </Stlyed>
  );
};

export default Services;
