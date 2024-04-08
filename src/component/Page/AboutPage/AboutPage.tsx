import './AboutPage.css';
import { motion } from 'framer-motion';
import { me } from '../../../assets';
import { FormattedMessage, useIntl } from 'react-intl';
import PageTitle from '../../common/PageTitle/PageTitle';


const AboutPage = () => {
  return (
    <motion.div
      className='about_page'
      id='about'

      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260, 
        damping: 20,
      }}
      >
      <PageTitle title={useIntl().formatMessage({ id: 'about' })}></PageTitle>
      <div className='about_content'>
        <img src={me} alt='Me !'/>
        <p>Welcome to my website. I'm <span>Aristide</span>, Data engineer since two years.</p>
        <p>Graduated from an <a href="https://www.isen.fr">engineering school</a>, I'm specialized in <span>designing and optimizing ETL pipelines</span> to ensure data integrity and reliability.</p>
        <p>Beyond my technical skills, I'm committed to upholding the highest standards of <span>data privacy and ethical practices</span>. When I'm not immersed in data, you can find me at the gym.</p>
        <p>Let's connect and explore how we can unlock the full potential of your data infrastructure together!</p>
      </div>
    </motion.div>
  )
}

export default AboutPage;