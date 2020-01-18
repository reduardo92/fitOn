import uuid from 'uuid';

const memerships = [
  {
    id: uuid.v4(),
    price: '10',
    included: ['gym', '24/7 Access', '-', '-']
  },
  {
    id: uuid.v4(),
    price: '20',
    included: ['gym', '24/7 Access', '5 clases/month', '-']
  },
  {
    id: uuid.v4(),
    price: '30',
    included: ['gym', '24/7 Access', '10 clases/month', '-']
  },
  {
    id: uuid.v4(),
    price: '50',
    included: ['gym', '24/7 Access', 'unlimated', 'one on one']
  }
];

export default memerships;
