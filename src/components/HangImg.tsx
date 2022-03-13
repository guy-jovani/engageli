import img0 from '../assets/images/Hangman-0.png';
import img1 from '../assets/images/Hangman-1.png';
import img2 from '../assets/images/Hangman-2.png';
import img3 from '../assets/images/Hangman-3.png';
import img4 from '../assets/images/Hangman-4.png';
import img5 from '../assets/images/Hangman-5.png';
import img6 from '../assets/images/Hangman-6.png';

const HangImg: React.FC<{ numInd: number }> = (props) => {
  const imgs = [img0, img1, img2, img3, img4, img5, img6];

  return <img style={{ height: '202px' }} src={imgs[props.numInd]} />;
};

export default HangImg;
