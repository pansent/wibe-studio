import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 5,
      delay: 3, // 0
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        {/* <img src={star} alt="Wibe Fashion" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M20.553,3.105l-6,3C11.225,7.77,9.274,9.953,8.755,12.6c-.738,3.751,1.992,7.958,2.861,8.321A.985.985,0,0,0,12,21h0c6.682,0,11-3.532,11-9,0-6.691-.9-8.318-1.293-8.707A1,1,0,0,0,20.553,3.105Zm-7.6,15.86a8.594,8.594,0,0,1,5.44-8.046,1,1,0,1,0-.788-1.838,10.363,10.363,0,0,0-6.393,7.667,6.59,6.59,0,0,1-.494-3.777c.4-2,1.989-3.706,4.728-5.076l5.03-2.515A29.2,29.2,0,0,1,21,12C21,16.063,17.94,18.67,12.954,18.965ZM3.523,5.38A29.2,29.2,0,0,0,3,12a6.386,6.386,0,0,0,4.366,6.212,1,1,0,1,1-.732,1.861A8.377,8.377,0,0,1,1,12c0-6.691.9-8.318,1.293-8.707a1,1,0,0,1,1.154-.188l6,3A1,1,0,0,1,8.553,7.9Z"            />
          </g>
        </svg>

        <Text variants={textVariants} initial="hidden" animate="visible">
          Jun Shen
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
